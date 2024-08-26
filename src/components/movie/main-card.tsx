import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Carousel, { ICarouselRef } from "../carousel";
import Skeleton from "../skeleton";
import Pagination from "../pagination";
import clsx from "clsx";
import { useWindowSize } from "@react-hooks-library/core";

export default function MainCard() {
  const carouselRef = useRef<ICarouselRef>(null);

  const [carouselImgLoading, setCarouselImgLoading] = useState(true);
  useEffect(() => {
    carouselImgLoading &&
      setInterval(() => {
        if (!carouselRef.current) return;

        if (carouselRef.current.page === carouselRef.current.pages) {
          return carouselRef.current.select(0);
        }

        carouselRef.current.next();
      }, 5000);
  }, [carouselImgLoading]);

  const [currentValue, setCurrentValue] = useState(1);
  const prevCarouselPage = useRef(currentValue);
  const onCurrentValueChange = (value: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      switch (value - prevCarouselPage.current) {
        case 1:
          carousel.next();
          break;
        case -1:
          carousel.prev();
          break;
        default:
          carousel.select(value);
          break;
      }
    }
    prevCarouselPage.current = value;
  };

  const onCarouselPageChange = (page: number) => {
    setCurrentValue(page);
  };

  const screenWidth = useWindowSize().width;

  return (
    <div className="p-2 table:p-4 desktop:pl-6 text-white bg-tertiary-500 rounded-lg flex flex-col lgMobile:flex-row-reverse justify-between gap-4 tablet:gap-8">
      <div className="w-full lgMobile:w-[60%] aspect-video overflow-hidden">
        <Carousel
          ref={carouselRef}
          items={[
            "https://picsum.photos/600/800?random=1",
            "https://picsum.photos/600/800?random=2",
            "https://picsum.photos/600/800?random=3",
            "https://picsum.photos/600/800?random=4",
            "https://picsum.photos/600/800?random=5",
            "https://picsum.photos/600/800?random=6",
          ]}
          ui={{
            item: "basis-full",
            wrapper: "h-full",
            container: "rounded-lg w-full",
          }}
          onPageChange={onCarouselPageChange}
          slot={{
            default: (item, index) => (
              <>
                {carouselImgLoading && <Skeleton className="w-full" />}
                <img
                  src={item}
                  onLoad={() => index === 0 && setCarouselImgLoading(false)}
                  className={clsx(
                    "w-full h-full object-cover",
                    carouselImgLoading ? "hidden" : "block"
                  )}
                  key={index}
                />
              </>
            ),
          }}
        />
      </div>
      <div className="lgMobile:hidden flex justify-center items-center">
        {screenWidth <= 480 && (
          <Pagination
            currentValue={currentValue}
            onCurrentValueChange={onCurrentValueChange}
            total={carouselRef.current ? carouselRef.current.pages : 10}
            max={16}
            pageCount={1}
            ui={{
              wrapper: "gap-x-3",
              base: "w-4 h-4",
              rounded: "rounded-full first:rounded-full last:rounded-full",
              activeButton: "text-primary-500",
              inactiveButton:
                "text-tertiary-500 bg-tertiary-500 dark:text-tertiary-500 dark:bg-tertiary-500 focus:text-tertiary-500 focus:bg-tertiary-500 dark:focus:text-tertiary-500 dark:focus:bg-tertiary-500",
            }}
          />
        )}
      </div>

      <div className="py-4 grow lgMobile:w-[40%] flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className=" text-primary-500 text-xs tablet:text-sm  font-redHatMono">
            Action, Adventure
          </p>
          <h1 className="uppercase text-2xl tablet:text-[32px] font-bold font-redHatMono">
            AVATAR
          </h1>
          <h2 className="uppercase text-base tablet:text-2xl font-redHatText">THE WAY OF WATER</h2>
          <p className="font-roboto text-justify text-xs tablet:text-base text-grey-500 mb-6">
            Jake Sully lives with her newfound family formed on the planet of Pandora. Once a
            familiar threat returns to finish what was previously started, Jake must work with
            Neytiri and the army of the Na’vi race to protect their plane.
          </p>
        </div>
        <Link
          to=""
          className="w-32 h-8 bg-primary-500 hover:bg-primary-600 transition-all rounded-2xl flex items-center justify-center gap-2 text-xs tablet:text-base">
          <Icon icon="mdi-eye" width="16" />
          See details
        </Link>
        <div className="hidden lgMobile:block ">
          {carouselRef.current && (
            <Pagination
              currentValue={currentValue}
              onCurrentValueChange={onCurrentValueChange}
              total={carouselRef.current.pages}
              max={screenWidth > 500 ? 16 : 5}
              pageCount={1}
              showPrev
              showNext
              ui={{
                wrapper: "mt-16 gap-x-2",
                base: "w-4 h-4",
                rounded: "rounded-full first:rounded-full last:rounded-full",
                activeButton: "text-primary-500",
                inactiveButton:
                  "text-tertiary-500 bg-tertiary-500 dark:text-tertiary-500 dark:bg-tertiary-500 focus:text-tertiary-500 focus:bg-tertiary-500 dark:focus:text-tertiary-500 dark:focus:bg-tertiary-500",
                prevButton: "w-8 h-8",
                nextButton: "w-8 h-8",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
