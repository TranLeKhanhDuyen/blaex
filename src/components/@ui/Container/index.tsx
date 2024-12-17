import React, { ReactNode } from "react";
import { Box } from "theme/base";

export const Container = ({
  children,
  sx,
  ...props
}: { children: ReactNode } & any) => {
  const marginLeftRight = `calc((100vw - 1920px) / 2 + 432px)`;

  return (
    <Box
      maxWidth={{ lg: 1560 }}
      px={3}
      {...props}
      sx={{
        width: "100%",
        mx: "auto",
        maxWidth: "100%",
        marginLeft: marginLeftRight,
        marginRight: marginLeftRight,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};