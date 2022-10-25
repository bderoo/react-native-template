import { Colors } from '@/theme'

export const Images = {
  exampleImage: require('../../images/exampleImage.jpg'),
}

export const Icons = {
  search: (color: string = Colors.white): string => (`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237
          19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2
          11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031
          16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132
          14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204
          18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z"
        fill="${color}"
      />
    </svg>`
  ),
  box: (): string => `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3H21.008C21.1393 2.99973
        21.2693 3.02556 21.3905 3.07601C21.5117 3.12645 21.6217 3.2005 21.714
        3.29383C21.8063 3.38717 21.8791 3.49794 21.9282 3.61969C21.9773 3.74144
        22.0017 3.87173 22 4.003V10H21V20.001C21.0004 20.1318 20.975 20.2614
        20.9253 20.3824C20.8756 20.5034 20.8026 20.6134 20.7104 20.7062C20.6182
        20.7989 20.5086 20.8726 20.3879 20.923C20.2672 20.9735 20.1378 20.9996
        20.007 21H3.993C3.8622 20.9996 3.73276 20.9735 3.61207 20.923C3.49139
        20.8726 3.38181 20.7989 3.2896 20.7062C3.19739 20.6134 3.12436 20.5034
        3.07467 20.3824C3.02498 20.2614 2.99961 20.1318 3 20.001V10ZM19
        10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z"
        fill="#47E6B6"
      />
    </svg>
`,
  chevronUp: (color: string = Colors.accentGray3): string => `
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364
        6.364L11.95 7.778L6.99999 2.828Z"
        fill="${color}"
      />
    </svg>`,
  chevronDown: (color: string = Colors.accentGray3): string => `
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999
        7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z"
        fill="${color}"
      />
    </svg>`,
  arrowLeft: (color: string = Colors.white): string => `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.828 7.00005H16V9.00005H3.828L9.192 14.364L7.778 15.778L0
        8.00005L7.778 0.222046L9.192 1.63605L3.828 7.00005Z"
        fill="${color}"
      />
    </svg>`,
  arrowRight: (color: string = Colors.white): string => `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222
        15.778L6.808 14.364L12.172 8.99998H0V6.99998H12.172Z"
        fill="${color}"
      />
    </svg>`,
  calendar: (color: string = Colors.white): string => `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043
        20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196
        19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893
        19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043
        0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM13
        4H7V6H5V4H2V8H18V4H15V6H13V4ZM18 10H2V18H18V10Z"
        fill="${color}"
      />
    </svg>`,
  doubleChevronRight: (color: string = Colors.accentGray3): string => `
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17198 7L0.221985 2.05L1.63598 0.636002L7.99998 7L1.63598
        13.364L0.221985 11.95L5.17198 7Z"
        fill="${color}"
      />
      <path
        d="M 12.675 7 L 7.725 2.05 L 9.139 0.636 L 15.503 7 L 9.139 13.364 L
        7.725 11.95 L 12.675 7 Z"
        fill="${color}"
      />
    </svg>`,
  chevronRight: (color: string = Colors.accentGray3): string => `
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17198 7L0.221985 2.05L1.63598 0.636002L7.99998 7L1.63598
        13.364L0.221985 11.95L5.17198 7Z"
        fill="${color}"
      />
    </svg>`,
  chevronLeft: (color: string = Colors.accentGray3): string => `
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.828 7L7.778 11.95L6.364 13.364L0 7L6.364 0.636002L7.778
        2.05L2.828 7Z"
        fill="${color}"
      />
    </svg>`,
  doubleChevronLeft: (color: string = Colors.accentGray3): string => `
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.828 7L7.778 11.95L6.364 13.364L0 7L6.364 0.636002L7.778
        2.05L2.828 7Z"
        fill="${color}"
      />
      <path
        d="M 10.308 7 L 15.258 11.95 L 13.844 13.364 L 7.48 7 L 13.844 0.636
        L 15.258 2.05 L 10.308 7 Z"
        fill="${color}"
      />
    </svg>`,
  warningCircle: (color: string = Colors.accentGray3): string => `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477
          22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
        fill="${color}"/>
    </svg>`,
  eye: (color: string = Colors.accentGray3): string => `
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11
        18C5.608 18 1.122 14.12 0.181 9C1.121 3.88 5.608 0 11 0ZM11 16C13.0395
        15.9996 15.0184 15.3068 16.6129 14.0352C18.2073 12.7635 19.3229 10.9883
        19.777 9C19.3212 7.0133 18.2049 5.24 16.6106 3.97003C15.0163 2.70005
        13.0383 2.00853 11 2.00853C8.9617 2.00853 6.98369 2.70005 5.38938
        3.97003C3.79506 5.24 2.67877 7.0133 2.223 9C2.6771 10.9883 3.79267
        12.7635 5.38714 14.0352C6.98161 15.3068 8.96053 15.9996 11 16ZM11
        13.5C9.80653 13.5 8.66193 13.0259 7.81802 12.182C6.97411 11.3381 6.5
        10.1935 6.5 9C6.5 7.80653 6.97411 6.66193 7.81802 5.81802C8.66193
        4.97411 9.80653 4.5 11 4.5C12.1935 4.5 13.3381 4.97411 14.182
        5.81802C15.0259 6.66193 15.5 7.80653 15.5 9C15.5 10.1935 15.0259 11.3381
        14.182 12.182C13.3381 13.0259 12.1935 13.5 11 13.5ZM11 11.5C11.663 11.5
        12.2989 11.2366 12.7678 10.7678C13.2366 10.2989 13.5 9.66304 13.5
        9C13.5 8.33696 13.2366 7.70107 12.7678 7.23223C12.2989 6.76339 11.663
        6.5 11 6.5C10.337 6.5 9.70107 6.76339 9.23223 7.23223C8.76339 7.70107
        8.5 8.33696 8.5 9C8.5 9.66304 8.76339 10.2989 9.23223 10.7678C9.70107
        11.2366 10.337 11.5 11 11.5Z"
        fill="${color}"
      />
    </svg>`,
  crossedEye: (color: string = Colors.accentGray3): string => `
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.882 18.297C15.1232 19.4126 13.0827 20.0033 11 20C5.608 20 1.122
        16.12 0.181 11C0.611029 8.67072 1.78263 6.5429 3.521 4.934L0.392
        1.808L1.807 0.393L21.606 20.193L20.191 21.607L16.881
        18.297H16.882ZM4.935 6.35C3.576 7.58559 2.62932 9.20878 2.223 11C2.53529
        12.3665 3.16226 13.6411 4.054 14.7226C4.94574 15.804 6.07763 16.6624
        7.35955 17.2293C8.64148 17.7962 10.038 18.0561 11.4381 17.9881C12.8381
        17.9202 14.203 17.5264 15.424 16.838L13.396 14.81C12.5327 15.3538
        11.5102 15.5881 10.4962 15.4744C9.48228 15.3608 8.53704 14.9059 7.81557
        14.1844C7.0941 13.463 6.63923 12.5177 6.52556 11.5038C6.4119 10.4898
        6.64618 9.46731 7.19 8.604L4.935 6.35ZM11.914 13.328L8.672
        10.086C8.49406 10.5389 8.45219 11.034 8.55151 11.5103C8.65082 11.9867
        8.88702 12.4238 9.23112 12.7679C9.57522 13.112 10.0123 13.3482 10.4887
        13.4475C10.965 13.5468 11.4601 13.5049 11.913 13.327L11.914
        13.328ZM19.807 15.592L18.376 14.162C19.0445 13.2093 19.5204 12.1352
        19.777 11C19.5052 9.80973 18.9943 8.68715 18.2751 7.70049C17.556
        6.71384 16.6438 5.88373 15.5939 5.2606C14.544 4.63748 13.3783 4.23437
        12.1677 4.07576C10.9572 3.91716 9.72701 4.00638 8.552 4.338L6.974
        2.76C8.221 2.27 9.58 2 11 2C16.392 2 20.878 5.88 21.819 11C21.5126
        12.6657 20.8239 14.2376 19.807 15.592ZM10.723 6.508C11.3595 6.46866
        11.9971 6.56507 12.5935 6.79082C13.19 7.01657 13.7316 7.36651 14.1825
        7.81745C14.6335 8.26839 14.9834 8.81003 15.2092 9.40646C15.4349 10.0029
        15.5313 10.6405 15.492 11.277L10.722 6.508H10.723Z"
        fill="${color}"
      />
    </svg>`,
}
