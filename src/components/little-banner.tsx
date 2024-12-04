import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const littleBannerVariant = tv ({
    base: 'max-w-[600px] rounded-[45px] border border-[#191A23] flex items-center shadow-[0_5px_0_0_black] p-12 justify-between mb-9',
    variants: {
        variant: {
            first: 'bg-white',
            second: 'bg-[#B9FF66]',
            third: 'bg-[#191A23]'
        }
    }
})

interface LittleBannerProps extends ComponentProps<'div'>, VariantProps<typeof littleBannerVariant> {
    text: string
    ImgSrc: string
    ImgText: string
    textHighlight: string
    imgBackground?: string
}

export function LittleBanner({ text, ImgSrc, ImgText, textHighlight, imgBackground, variant}: LittleBannerProps) {
    // const textHighlightColor= `bg-[${textHighlight}]`

    return(
    <div className={littleBannerVariant({variant})}>
        <h1 className="text-3xl font-medium max-w-[210px]"><span className={`inline ${textHighlight}`}>{text}</span></h1>
        <img className={`max-w-[220px] ${imgBackground}`} src={ImgSrc} alt={ImgText} />
    </div>
    )
}