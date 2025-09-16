interface BannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
  }
  
  /**
   * Generic banner component for page intros. It accepts a title, optional
   * subtitle and optional background image. If a background image is provided,
   * it will be displayed behind a translucent overlay. Otherwise a plain
   * coloured background is used. Use this component at the top of secondary
   * pages like About, Recipes and Articles.
   */
  export default function Banner({
    title,
    subtitle,
    backgroundImage,
  }: BannerProps) {
    return (
      <section
        className="relative flex items-center
         justify-center md:py-24 bg-white/30 backdrop-blur-[2px] mx-6 mt-20 rounded-2xl px-10 py-20 text-zinc-900"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: backgroundImage ? 'cover' : undefined,
          backgroundPosition: 'center',
        }}
      >
        {backgroundImage && (
          <div className="absolute inset-0 bg-green-800/60"></div>
        )}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold ">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }