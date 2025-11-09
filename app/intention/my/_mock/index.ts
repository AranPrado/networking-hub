export enum IntentionStatus {
  PENDENTE = "pending",
  APROVADO = "approved",
  REPROVADO = "rejected",
}

export type IntentionStatusType = keyof typeof IntentionStatus;

export interface IntentionInterface {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
  email: string;
  name: string;
  phone: string;
  status: IntentionStatusType;
}

export const mockIntention: IntentionInterface[] = [
  {
    id: "1",
    title: "Proposta 1",
    createdAt: new Date(),
    email: "H2m2t@example.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quibusdam.",
    name: "Nome 1",
    phone: "11999999999",
    status: "PENDENTE",
  },
  {
    id: "2",
    title: "Proposta 2",
    createdAt: new Date(),
    email: "cliente2@example.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    name: "Nome 2",
    phone: "11988888888",
    status: "APROVADO",
  },
  {
    id: "3",
    title: "Proposta 3",
    createdAt: new Date(),
    email: "cliente3@example.com",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    name: "Nome 3",
    phone: "11977777777",
    status: "REPROVADO",
  },
  {
    id: "4",
    title: "Proposta 4",
    createdAt: new Date(),
    email: "cliente4@example.com",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Nome 4",
    phone: "11966666666",
    status: "PENDENTE",
  },
  {
    id: "5",
    title: "Proposta 5",
    createdAt: new Date(),
    email: "cliente5@example.com",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Nome 5",
    phone: "11955555555",
    status: "APROVADO",
  },
  {
    id: "6",
    title: "Proposta 6",
    createdAt: new Date(),
    email: "cliente6@example.com",
    message:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Nome 6",
    phone: "11944444444",
    status: "REPROVADO",
  },
  {
    id: "7",
    title: "Proposta 7",
    createdAt: new Date(),
    email: "cliente7@example.com",
    message:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Nome 7",
    phone: "11933333333",
    status: "PENDENTE",
  },
  {
    id: "8",
    title: "Proposta 8",
    createdAt: new Date(),
    email: "cliente8@example.com",
    message:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    name: "Nome 8",
    phone: "11922222222",
    status: "APROVADO",
  },
  {
    id: "9",
    title: "Proposta 9",
    createdAt: new Date(),
    email: "cliente9@example.com",
    message:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Nome 9",
    phone: "11911111111",
    status: "REPROVADO",
  },
  {
    id: "10",
    title: "Proposta 10",
    createdAt: new Date(),
    email: "cliente10@example.com",
    message: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    name: "Nome 10",
    phone: "11900000000",
    status: "PENDENTE",
  },
  {
    id: "11",
    title: "Proposta 11",
    createdAt: new Date(),
    email: "cliente11@example.com",
    message:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    name: "Nome 11",
    phone: "11912345678",
    status: "APROVADO",
  },
];
