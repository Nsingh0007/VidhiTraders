import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#pattern0)" d="M0.5 0.5H19.5V19.5H0.5z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#image0_31_2062" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="image0_31_2062"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAbFBMVEUAAABeRAEBUnhAXACmNRkBZJGbcAEBZ5ebeAFOcACbcAGldwGbcAFRdAABj9EBh8VqmABxogDJQB7QQx7RQh8Brv4Btf//xQL/0QIBpO8BqviBuQCGwACJxQCOzQD0TiT9USX/VCb/uQL/xQKOzJbvAAAAGXRSTlMAEhYkKjY2ODhYWFhaXmZoaGhoam79/f394Hta5wAABdFJREFUeJzt0klSEAEABMFxFxVQxB0R9f9/9NqXORNGZT2hO49fvR5ujpMufv6odTz2G48QABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAdQAPvX7fngG4vL+rddz0+vj8DMCzD+9rnU0hSZIkSZIkSZIkSZIkSZIkSZL+g170evX0bIwnr1/WOj71+nx1BuDt1y+1jm+9vl+fAXj3908tALY3ABQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXABMAAOQCYAIAgFwATAAAkAuACQAAcgEwAQBALgAmAADIBcAEAAC5AJgAACAXANM/bW3AXi30yp4AAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
