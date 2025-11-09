type IntetionAdminResponse = "approved" | "rejected";

interface IhandleIntentionAdmin {
  id: string;
  type: IntetionAdminResponse;
}

export const handleIntentionAdmin = async (data: IhandleIntentionAdmin) => {
  console.log(data);
};
