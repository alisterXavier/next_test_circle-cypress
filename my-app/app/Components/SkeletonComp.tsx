import { Skeleton } from '@mantine/core';

type SkeletonContainerProps = {
  h: number;
  w: number | string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  repeat: number;
  wrap?: boolean;
  children?: React.ReactNode;
};

export const SkeletonContainer = ({
  h,
  w,
  mt,
  mr,
  mb,
  ml,
  repeat,
  wrap,
  children,
}: SkeletonContainerProps) => {
  const skeletons = [];
  for (let i = 0; i < repeat; i++) {
    skeletons.push(
      <Skeleton
        key={i} // Ensure each Skeleton has a unique key
        height={h}
        width={w}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
        {children}
      </Skeleton>
    );
  }

  return <div className={`flex ${wrap && 'flex-wrap'}`}>{skeletons}</div>;
};
