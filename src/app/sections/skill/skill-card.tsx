export const SkillCard: React.FC<SkillCardProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <div className='flex flex-col gap-3 md:gap-6'>
      <div className='flex size-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-neutral-300 md:size-15.75'>
        <span className='text-[24.38px] leading-[27.43px] font-bold md:text-[32px] md:leading-9'>
          {icon}
        </span>
      </div>

      <div className='flex flex-col gap-3 md:gap-4'>
        <span className='text-lg-bold md:display-xs-bold'>{title}</span>
        <span className='tracking-[0.03em]'>{description}</span>
      </div>
    </div>
  );
};
