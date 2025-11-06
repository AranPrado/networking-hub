import { Divider, Typography } from "antd";

interface IHeaderTitle {
  title: string;
}

export default function HeaderTitle({ title }: IHeaderTitle) {
  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Divider style={{ margin: "1rem 0" }} />
    </>
  );
}
