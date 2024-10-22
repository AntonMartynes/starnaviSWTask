export interface IPerson {
  id: number;
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  skin_color: string;
}

export interface ICharState {
  people: IPerson[];
  loading: boolean;
  pagesCount: number;
  currPage: number;
}

export interface IPaginationControlsProps {
  count: number;
  currPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export interface ICharCardElementProps {
  person: IPerson; 
}

export interface ICharListElementProps {
  people: IPerson[]; 
}

export interface ICharacterDetail {
  label: string;
  value: string
}