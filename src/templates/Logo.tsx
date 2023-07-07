type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        width="83"
        height="50"
        viewBox="0 0 83 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.4 4.35011C43.4996 4.38351 45.489 4.58389 47.4028 5.22677C50.4163 6.24535 51.6334 8.70833 51.3228 11.5721C51.1801 12.8745 50.7185 14.1018 50.1561 15.3041C49.7448 16.1724 49.3418 17.0323 48.8298 17.8422C47.5875 19.7959 46.1437 21.5826 44.2215 22.9351C43.8354 23.2107 43.4073 23.4194 42.9792 23.6198C41.4431 24.3294 40.0833 23.8201 38.8158 22.9518C36.9523 21.6828 35.5421 19.9796 34.3334 18.101C33.1499 16.2642 32.2013 14.3189 31.7733 12.1648C31.4207 10.4032 31.6306 8.72502 32.7218 7.23054C33.536 6.11177 34.686 5.48559 35.9702 5.10153C37.7666 4.56719 39.6132 4.31672 42.4 4.35011ZM33.813 7.6146C33.7542 7.69809 33.7207 7.73984 33.7039 7.78158C33.0827 9.00889 32.9988 10.3197 33.2758 11.6138C34.048 15.3291 35.9199 18.4517 38.6311 21.09C38.841 21.2904 39.0592 21.4991 39.3614 21.5826C39.2355 21.3739 39.0928 21.1902 38.9417 21.0148C37.5735 19.4953 36.4403 17.8172 35.5254 15.9887C34.2914 13.509 33.5108 10.9375 33.8717 8.13224C33.8885 7.98196 33.9137 7.83168 33.813 7.6146ZM43.7515 12.6491C43.7263 12.3235 43.6423 11.9895 43.2646 11.881C43.0044 11.8058 42.7778 11.9144 42.6518 12.1815C42.5091 12.4988 42.5259 12.8161 42.6686 13.125C42.8701 13.5508 43.2562 13.6009 43.5584 13.2419C43.7011 13.0832 43.7431 12.8829 43.7515 12.6491ZM39.0676 9.66012C39.0592 9.21762 38.7654 8.84191 38.4297 8.86696C38.0939 8.88366 37.8505 9.23432 37.8589 9.68517C37.8673 10.1026 38.1443 10.4783 38.4549 10.4783C38.7738 10.4867 39.076 10.0776 39.0676 9.66012ZM35.9954 11.0628C35.987 10.6453 35.7184 10.278 35.4078 10.2696C35.0889 10.2613 34.7279 10.7038 34.7447 11.0795C34.7615 11.5721 35.0049 11.8559 35.3911 11.8476C35.752 11.8392 36.0038 11.5136 35.9954 11.0628ZM40.1588 15.1204C40.1588 15.613 40.3939 15.9386 40.7296 15.9303C41.057 15.9136 41.3592 15.5295 41.3508 15.1121C41.3508 14.6696 41.057 14.2939 40.7212 14.3105C40.419 14.3272 40.1588 14.6946 40.1588 15.1204ZM46.597 15.9887C46.597 16.3394 46.916 16.7819 47.1678 16.7735C47.4616 16.7652 47.7973 16.3143 47.7973 15.9136C47.7973 15.4961 47.5287 15.1288 47.2266 15.1121C46.874 15.087 46.597 15.4711 46.597 15.9887ZM41.7117 17.3747C41.7117 17.8088 41.9719 18.1177 42.2993 18.101C42.6518 18.0843 42.9037 17.742 42.9037 17.2912C42.9037 16.832 42.6435 16.498 42.2909 16.498C41.9132 16.5147 41.7033 16.8236 41.7117 17.3747ZM36.1801 7.6313C36.1969 7.85672 36.2556 8.16564 36.5746 8.34932C36.7593 8.45786 36.9272 8.42446 37.0782 8.29087C37.3385 8.04875 37.4392 7.73984 37.3552 7.38917C37.2797 7.07191 37.137 6.80474 36.7593 6.80474C36.4319 6.81309 36.1801 7.14705 36.1801 7.6313ZM49.8203 11.0294C49.8203 10.5952 49.5265 10.2028 49.2075 10.2195C48.897 10.2279 48.62 10.6036 48.62 11.021C48.62 11.4552 48.9137 11.8476 49.2327 11.8392C49.5433 11.8225 49.8119 11.4385 49.8203 11.0294ZM45.1784 15.0954C45.17 14.6696 44.9014 14.3105 44.5825 14.3105C44.2467 14.3105 43.9781 14.6696 43.9781 15.1037C43.9781 15.5379 44.2635 15.9303 44.5825 15.9219C44.9098 15.9219 45.1868 15.5212 45.1784 15.0954ZM45.7744 10.7538C45.766 10.3364 45.4974 9.96904 45.1868 9.96069C44.8679 9.95234 44.5741 10.328 44.5741 10.7538C44.5741 11.188 44.8595 11.5804 45.17 11.5804C45.4974 11.5804 45.7744 11.188 45.7744 10.7538ZM36.3228 13.509C36.3144 14.0016 36.5578 14.369 36.9104 14.3773C37.2377 14.3857 37.5063 14.0517 37.5147 13.6176C37.5315 13.0999 37.2881 12.766 36.8768 12.766C36.4907 12.766 36.3396 12.9747 36.3228 13.509ZM39.9238 11.2464C39.5964 11.2381 39.3278 11.5804 39.3194 12.0146C39.311 12.4571 39.5797 12.8411 39.907 12.8495C40.2176 12.8578 40.503 12.4988 40.5198 12.073C40.5282 11.6472 40.2512 11.2548 39.9238 11.2464ZM42.6435 10.2946C42.6518 9.83545 42.3832 9.47644 42.0475 9.47644C41.7285 9.47644 41.4599 9.83545 41.4515 10.2613C41.4431 10.6954 41.7285 11.0878 42.0559 11.0878C42.3832 11.0878 42.6351 10.7371 42.6435 10.2946ZM47.4112 12.7075C47.4112 12.2567 47.1342 11.8893 46.8069 11.8977C46.4879 11.906 46.2361 12.265 46.2361 12.6992C46.2361 13.15 46.5131 13.5257 46.8404 13.509C47.1426 13.4923 47.4112 13.125 47.4112 12.7075ZM45.2288 18.5101C45.2372 18.0676 44.9518 17.6919 44.6244 17.6919C44.3055 17.7003 44.0452 18.0509 44.0452 18.4851C44.0369 18.9443 44.3055 19.3033 44.6412 19.2949C44.9602 19.2949 45.2204 18.9359 45.2288 18.5101ZM41.7621 20.0046C41.7621 20.4471 42.0055 20.7978 42.3329 20.8061C42.6686 20.8228 42.954 20.4471 42.954 20.0046C42.954 19.5621 42.6686 19.2031 42.3245 19.2031C42.0307 19.1948 41.7705 19.5705 41.7621 20.0046ZM47.747 9.04229C47.7386 8.60814 47.4784 8.26583 47.1594 8.25748C46.8236 8.25748 46.5634 8.61649 46.5634 9.07569C46.5718 9.51819 46.8237 9.85215 47.151 9.85215C47.4868 9.8605 47.7554 9.49314 47.747 9.04229ZM39.991 6.87153C39.991 7.29734 40.2428 7.66469 40.5617 7.68139C40.8975 7.69809 41.1913 7.32238 41.1913 6.87988C41.1913 6.46243 40.9227 6.09507 40.6037 6.07837C40.2596 6.07002 39.991 6.41233 39.991 6.87153ZM37.4224 16.2308C37.4224 16.69 37.691 17.0407 38.0352 17.0323C38.3625 17.024 38.6059 16.6817 38.6059 16.2392C38.6059 15.78 38.3373 15.421 38.0016 15.4377C37.6742 15.446 37.4224 15.7967 37.4224 16.2308ZM44.5825 7.62295C44.5741 7.1888 44.3222 6.83814 44.0033 6.82979C43.6759 6.82144 43.3905 7.2055 43.3905 7.63965C43.3989 8.0571 43.6675 8.41611 43.9781 8.42446C44.3222 8.44116 44.5909 8.08215 44.5825 7.62295ZM40.3015 18.4934C40.3015 18.0509 40.0581 17.7003 39.7391 17.6919C39.4034 17.6752 39.118 18.0426 39.1096 18.4851C39.1096 18.9276 39.3866 19.3033 39.7223 19.2949C40.0413 19.2782 40.2931 18.9276 40.3015 18.4934Z"
          fill="#ED1D30"
        />
        <path
          d="M65.2064 39.1739C65.2064 38.2973 65.2316 37.4373 65.198 36.5774C65.1308 34.44 65.1476 32.2943 64.9798 30.1569C64.9546 29.848 64.8538 29.7395 64.5517 29.7645C64.2998 29.7896 64.048 29.7562 63.7962 29.7645C63.494 29.7729 63.3681 29.6143 63.3429 29.3304C63.3177 29.0465 63.5024 28.9964 63.7374 28.963C64.9798 28.7543 66.2137 28.5372 67.456 28.3285C67.6406 28.2951 67.8757 28.1949 67.9596 28.4621C68.0268 28.6959 67.9764 28.938 67.7498 29.0883C67.6574 29.1467 67.5483 29.1968 67.4476 29.2219C66.8768 29.3471 66.7425 29.7228 66.7173 30.2571C66.5159 34.4567 66.3396 38.648 66.2808 42.8559C66.2724 43.5656 66.1885 43.6073 65.475 43.6574C64.8203 43.6991 64.3754 43.4654 64.0061 42.9143C62.151 40.1675 60.2204 37.4707 58.1135 34.9076C57.9876 34.7489 57.8533 34.5903 57.6602 34.3565C57.6098 35.3 57.5511 36.1516 57.5175 37.0032C57.4588 38.3474 57.4168 39.6999 57.3412 41.0441C57.3244 41.353 57.4084 41.5033 57.719 41.5618C58.0463 41.6202 58.3653 41.7371 58.6927 41.8206C58.9613 41.8874 59.062 42.0711 59.02 42.3215C58.9781 42.6138 58.7598 42.5386 58.5584 42.5136C55.5953 42.1045 52.6154 41.854 49.6272 41.6954C49.4173 41.687 49.09 41.7872 49.0816 41.4115C49.0732 41.0692 49.3166 41.0024 49.6188 40.969C50.5169 40.8771 50.5169 40.8688 50.1476 40.0506C49.9042 39.5079 49.6608 38.9569 49.4173 38.4142C49.3502 38.2555 49.2746 38.1387 49.0648 38.1387C47.7889 38.1637 46.5214 38.122 45.2455 38.1971C45.0021 38.2138 44.9098 38.2889 44.851 38.5144C44.6999 39.0904 44.5488 39.6749 44.3642 40.2343C44.2382 40.6016 44.3809 40.7018 44.7083 40.7352C44.9182 40.7519 45.1196 40.802 45.3295 40.8271C45.5897 40.8605 45.7492 41.0107 45.7324 41.2696C45.7156 41.5618 45.4722 41.495 45.2875 41.495C44.0536 41.495 42.8281 41.3864 41.5941 41.4449C41.4263 41.4532 41.2332 41.4699 41.1996 41.2362C41.1661 41.0191 41.2584 40.7853 41.4598 40.777C42.2069 40.7436 42.3832 40.1675 42.635 39.6498C43.9361 36.9781 45.086 34.2313 46.3032 31.5178C46.597 30.8666 47.0418 30.5828 47.7217 30.5577C48.3093 30.541 48.8969 30.5327 49.4845 30.4826C49.9126 30.4492 50.1308 30.5828 50.2819 31.0086C51.4151 34.1979 52.5735 37.3872 53.7318 40.5766C53.9081 41.0692 54.546 41.4866 55.0749 41.4532C55.1336 41.4532 55.184 41.4282 55.2427 41.4198C55.5701 41.3864 56.015 41.4783 56.1913 41.2362C56.3424 41.0274 56.2416 40.6183 56.2332 40.3011C56.1325 37.2871 56.015 34.2647 55.9227 31.2507C55.9143 30.9501 55.7967 30.8666 55.5197 30.8666C55.3267 30.8666 55.1336 30.8332 54.9406 30.7998C54.6971 30.7581 54.6468 30.5744 54.6384 30.3657C54.63 30.1403 54.7895 30.0818 54.9657 30.0651C56.1325 29.9399 57.2993 29.823 58.466 29.6894C58.7682 29.656 58.9277 29.8146 59.0872 30.0234C60.6401 31.9437 61.9915 34.0059 63.301 36.0931C63.8717 37.0115 64.4341 37.9466 65.0049 38.8734C65.0469 38.9903 65.0721 39.1155 65.2064 39.1739ZM46.9579 32.6283C46.79 32.7285 46.79 32.8871 46.7396 33.004C46.3367 34.1144 45.9338 35.2248 45.5393 36.3353C45.4386 36.6108 45.1868 36.9364 45.3127 37.1451C45.447 37.3622 45.8499 37.2453 46.1353 37.2704C47.0502 37.3371 47.9652 37.3622 48.9557 37.4039C48.259 35.7759 47.5707 34.2229 46.9579 32.6283Z"
          fill="#ED1D30"
        />
        <path
          d="M72.9288 39.3157C72.316 39.3157 71.7033 39.3157 71.0821 39.3157C70.9226 39.3157 70.7799 39.299 70.7464 39.5245C70.5701 40.6599 70.2931 41.7871 70.142 42.9309C70.1 43.2148 70.184 43.3734 70.4526 43.4652C70.7044 43.5487 70.9394 43.674 71.1828 43.7658C71.3843 43.8409 71.5018 43.9829 71.5522 44.1832C71.6445 44.5339 71.5018 44.6925 71.1493 44.6091C70.0664 44.3419 68.9668 44.1248 67.8672 43.9411C67.7161 43.9161 67.565 43.9077 67.414 43.8743C67.2377 43.8409 67.0278 43.8242 67.0278 43.5738C67.0278 43.3483 67.0614 43.0728 67.3468 43.0645C67.9764 43.0478 68.1023 42.6053 68.2701 42.1294C69.5544 38.3973 70.5533 34.5818 71.5942 30.783C71.8292 29.9397 72.0558 29.0965 72.2657 28.2449C72.4335 27.5853 72.8197 27.1679 73.4912 27.0259C74.1459 26.8923 74.8006 26.7504 75.4554 26.6252C75.7911 26.5584 75.959 26.6836 76.043 27.0343C77.1845 32.1856 78.2002 37.3621 79.2243 42.5385C79.3754 43.2982 79.56 44.058 79.6608 44.8261C79.7363 45.3521 80.0553 45.6276 80.4666 45.8614C80.7268 46.0117 80.9031 46.1954 80.9115 46.5126C80.9199 46.8967 80.8191 46.9969 80.433 46.8883C79.5181 46.6379 78.6115 46.3707 77.6966 46.1202C76.8991 45.9032 76.1101 45.6944 75.2959 45.5525C75.0441 45.5107 74.8678 45.4189 74.9098 45.1183C74.9517 44.8595 75.0105 44.6174 75.3547 44.6341C75.5645 44.6424 75.7744 44.6091 75.9842 44.6341C76.2948 44.6675 76.3703 44.559 76.2948 44.2584C75.9926 43.0728 75.7072 41.8873 75.4134 40.7017C75.3798 40.5681 75.3379 40.4345 75.3043 40.3009C75.086 39.441 75.086 39.4326 74.1795 39.3992C73.7598 39.3825 73.3401 39.3992 72.9204 39.3992C72.9288 39.3825 72.9288 39.3491 72.9288 39.3157ZM72.7945 30.3655C72.7022 30.4073 72.7022 30.4824 72.6854 30.5492C72.1649 32.9037 71.6613 35.2664 71.1241 37.6209C71.0485 37.9632 71.1661 38.03 71.4431 38.0634C72.4503 38.2053 73.4576 38.3473 74.4733 38.4474C74.8007 38.4808 74.851 38.414 74.7755 38.1135C74.1123 35.5336 73.4576 32.9538 72.7945 30.3655Z"
          fill="#ED1D30"
        />
        <path
          d="M24.0255 35.2835C23.9919 33.9059 24.0003 32.3697 23.8492 30.8502C23.824 30.6164 23.7485 30.4995 23.5134 30.4578C23.2784 30.416 23.0518 30.3492 22.8251 30.2824C22.5397 30.2073 22.4558 29.9902 22.4978 29.7314C22.5397 29.4726 22.7496 29.5143 22.9259 29.5394C24.5375 29.7147 26.1492 29.8984 27.7608 30.0821C27.9455 30.1071 28.1301 30.1405 28.1217 30.3993C28.1133 30.6331 28.0042 30.7834 27.7608 30.8335C27.5761 30.8752 27.2823 30.7834 27.2152 30.942C27.1312 31.1424 27.19 31.4012 27.2152 31.635C27.3747 33.3382 27.5006 35.0497 27.4586 36.7613C27.3831 39.4831 26.0904 41.4034 23.5554 42.447C22.204 43.0064 20.7938 43.2318 19.3332 43.1483C17.6041 43.0398 16.4121 41.921 15.9505 40.0174C15.5727 38.4478 15.5727 36.8448 15.6483 35.2501C15.7322 33.4133 15.8581 31.5849 16.1016 29.7648C16.1268 29.5644 16.068 29.4475 15.8749 29.3807C15.6819 29.3056 15.4804 29.2305 15.2957 29.1386C15.0187 29.005 14.9768 28.7546 15.0355 28.5041C15.1027 28.2369 15.3293 28.3371 15.5224 28.3705C17.176 28.6544 18.8296 28.9299 20.4832 29.1971C20.7266 29.2388 20.9365 29.2722 20.8945 29.5895C20.8526 29.8733 20.7015 29.9735 20.4077 29.9819C19.5095 29.9902 19.5179 29.9986 19.4676 30.9003C19.35 32.9708 19.2829 35.0414 19.3165 37.112C19.3332 38.3059 19.4004 39.4998 19.8033 40.652C19.8537 40.7939 19.9124 40.9358 19.9712 41.0778C20.6091 42.422 22.3215 42.5723 23.2029 41.3533C23.6813 40.6854 23.8156 39.9006 23.9164 39.1157C24.0675 37.8801 24.0339 36.6611 24.0255 35.2835Z"
          fill="#ED1D30"
        />
        <path
          d="M40.3602 43.2817C44.4817 43.2901 47.5455 43.3736 50.6009 43.5907C53.9249 43.8244 57.2405 44.1751 60.5477 44.6426C68.0184 45.6863 75.3547 47.3394 82.5819 49.5018C82.6659 49.5268 82.7414 49.5686 82.8169 49.5769C82.9848 49.5936 83.0352 49.6771 82.9764 49.8274C82.9261 49.9693 82.8505 49.9944 82.691 49.9526C81.9272 49.7523 81.1549 49.5686 80.3827 49.3849C76.6893 48.4832 72.9708 47.7234 69.2271 47.0722C66.4907 46.5963 63.7542 46.1956 61.001 45.8532C58.9613 45.6028 56.9215 45.4024 54.8734 45.2354C52.4392 45.035 49.9965 44.8764 47.5539 44.7846C44.2131 44.6593 40.8723 44.6009 37.5315 44.7178C35.7435 44.7762 33.9556 44.8263 32.1677 44.9265C30.1615 45.0434 28.1554 45.1937 26.1492 45.3941C24.5796 45.5527 23.0099 45.7197 21.4486 45.9117C19.4173 46.1538 17.3859 46.446 15.363 46.78C12.3411 47.2726 9.3361 47.8487 6.33945 48.5166C4.40883 48.9424 2.48661 49.4016 0.581181 49.9025C0.488847 49.9276 0.38812 49.9359 0.295786 49.9693C0.127907 50.0528 0.0775427 49.9526 0.0271789 49.8274C-0.0567609 49.6354 0.0691487 49.627 0.195058 49.5936C1.00927 49.3515 1.8151 49.101 2.62931 48.8673C7.27957 47.5231 11.997 46.4126 16.7564 45.5443C19.6187 45.0183 22.5062 44.6009 25.3938 44.2586C28.5415 43.8829 31.6976 43.6241 34.8706 43.4654C37.0614 43.3318 39.2438 43.3151 40.3602 43.2817Z"
          fill="#06A653"
        />
        <path
          d="M10.2342 28.2117C10.2091 28.8045 10.1671 29.3722 10.1587 29.9316C10.0831 34.4485 9.95723 38.9736 9.95723 43.4988C9.95723 43.8996 10.0915 44.0081 10.4525 43.9747C10.6204 43.958 10.7882 43.9831 10.9561 43.9747C11.2583 43.958 11.3338 44.1584 11.3674 44.3922C11.401 44.6594 11.2499 44.7679 11.0149 44.8096C9.24374 45.1353 7.4894 45.5277 5.76864 46.062C5.60915 46.1121 5.4077 46.1789 5.33215 45.9702C5.23142 45.6946 5.28179 45.4024 5.542 45.2271C5.79382 45.0518 6.07082 44.9182 6.34782 44.7929C6.58285 44.6844 6.6584 44.5341 6.6584 44.2753C6.63322 42.1213 6.63322 39.9588 6.60804 37.8048C6.56607 34.4652 6.50731 31.1255 6.48213 27.7859C6.48213 27.4185 6.36461 27.2933 6.02885 27.2766C5.55039 27.2599 5.08033 27.2349 4.61027 27.1848C4.14021 27.1347 3.93036 27.3601 3.80445 27.7776C3.52745 28.7377 3.22526 29.6895 2.93147 30.6496C2.87272 30.85 2.85593 31.1506 2.53696 31.0921C2.26835 31.042 2.10887 30.8083 2.11726 30.5327C2.18441 28.8629 2.25996 27.1931 2.3439 25.5317C2.36068 25.1559 2.6209 25.1476 2.92308 25.2478C4.45078 25.7738 6.00367 26.2497 7.57334 26.6337C9.59629 27.1347 11.6276 27.5688 13.6842 27.861C14.3641 27.9612 14.3976 28.003 14.4144 28.6709C14.448 29.7312 14.4732 30.7832 14.5236 31.8435C14.5319 32.1274 14.4732 32.3528 14.1794 32.4196C13.8436 32.4948 13.8017 32.2193 13.7261 31.9938C13.4491 31.1923 13.1637 30.3992 12.8951 29.5893C12.786 29.2637 12.6013 29.0383 12.2824 28.9047C11.6108 28.6542 10.9477 28.4037 10.2342 28.2117Z"
          fill="#ED1D30"
        />
        <path
          d="M41.6779 28.9131C36.843 28.9047 32.3019 28.6793 27.7775 28.2285C18.4602 27.3017 9.34436 25.4065 0.396381 22.693C0.346017 22.6763 0.287259 22.6596 0.236896 22.6346C0.136168 22.5928 -0.0317116 22.6262 0.0354402 22.4092C0.094198 22.2004 0.220108 22.2422 0.354411 22.2756C1.27775 22.501 2.19269 22.7348 3.11603 22.9602C7.52287 24.0372 11.9801 24.9139 16.4624 25.6236C21.9185 26.4835 27.4082 27.0512 32.9314 27.3435C38.6897 27.644 44.448 27.6357 50.2146 27.3184C53.8576 27.118 57.4922 26.8008 61.1184 26.3583C68.3372 25.4733 75.4637 24.1207 82.5062 22.3257C82.5566 22.309 82.6154 22.3006 82.6657 22.2839C82.8168 22.2338 82.9343 22.2505 82.9847 22.4342C83.0351 22.6429 82.8588 22.6179 82.7581 22.6513C81.3143 23.0687 79.8621 23.4945 78.41 23.887C73.5331 25.2311 68.5974 26.2915 63.603 27.1097C60.4553 27.6273 57.2991 28.0197 54.1262 28.3203C49.8873 28.7127 45.6483 28.9047 41.6779 28.9131Z"
          fill="#ED1D30"
        />
        <path
          d="M31.5802 30.3576C33.7375 30.4077 35.5757 30.4411 37.3637 30.8836C38.7403 31.2259 40.0245 31.7519 40.9227 32.9208C42.0559 34.4069 42.0391 36.778 40.9059 38.4479C39.9406 39.8672 38.5304 40.6437 36.9356 41.1446C35.6681 41.5454 34.367 41.6873 33.0491 41.704C31.7733 41.7207 30.5142 41.8626 29.2467 41.9879C29.062 42.0046 28.827 42.088 28.7766 41.7958C28.7346 41.5203 28.8689 41.37 29.1543 41.2865C30.0525 41.0277 30.0693 41.0194 30.0609 40.0676C30.0357 37.2122 29.977 34.3652 29.9518 31.5098C29.9518 31.251 29.851 31.1675 29.6244 31.1424C29.4062 31.1174 29.1795 31.0756 28.9613 31.0422C28.7095 31.0088 28.6003 30.8419 28.6003 30.6081C28.6003 30.3326 28.8102 30.3159 29.0116 30.3159C29.977 30.2992 30.9423 30.3242 31.5802 30.3576ZM33.4688 36.1936C33.4437 36.1936 33.4185 36.1936 33.3933 36.1936C33.3933 37.6213 33.4101 39.0573 33.3849 40.485C33.3765 40.8774 33.5444 40.9609 33.8718 40.9442C35.1141 40.8858 36.1549 40.4015 36.9104 39.4163C38.01 37.9887 38.1779 36.3355 37.9344 34.624C37.6574 32.6369 36.1717 31.3261 34.1572 31.2009C33.7962 31.1758 33.6955 31.2927 33.6787 31.6183C33.6199 33.1378 33.5444 34.6657 33.4688 36.1936Z"
          fill="#ED1D30"
        />
        <path
          d="M37.3637 1.64495C38.329 1.33603 39.3027 1.08556 40.226 0.70985C41.0906 0.359189 41.8628 0.400935 42.7442 0.718199C46.2025 1.97891 49.6776 3.18952 52.9849 4.81759C53.5389 5.08476 54.0761 5.37698 54.5629 5.76103C54.6804 5.85287 54.8483 5.95306 54.7812 6.12839C54.7224 6.31207 54.521 6.27033 54.3783 6.26198C53.1527 6.23693 51.9776 5.91132 50.8024 5.61075C47.7722 4.83429 44.8091 3.8658 41.8461 2.88061C41.5942 2.79712 41.376 2.79712 41.1242 2.88061C37.7582 3.98268 34.3418 4.89273 30.8332 5.46047C30.1029 5.57736 29.3642 5.68589 28.6256 5.6358C28.4745 5.62745 28.273 5.6358 28.2226 5.47717C28.1639 5.28514 28.3653 5.18495 28.4996 5.10981C29.6328 4.40849 30.8835 3.97433 32.1258 3.50679C32.8981 3.22292 33.6703 2.93905 34.451 2.68858C34.728 2.59674 34.8203 2.4715 34.8203 2.19598C34.8119 1.66164 34.9126 1.144 35.1729 0.668105C35.3743 0.300746 35.6429 0.000179472 36.1046 0.000179472C36.5746 -0.00816959 36.8768 0.275699 37.0951 0.659756C37.2713 0.943624 37.3133 1.27759 37.3637 1.64495Z"
          fill="#06A653"
        />
      </svg>
    </span>
  );
};

export { Logo };