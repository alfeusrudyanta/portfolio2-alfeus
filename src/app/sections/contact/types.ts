export type ContactData = {
  imageSrc: string;
  name: string;
};

export type DialogProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  tryAgain?: () => void;
};
