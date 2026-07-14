

1) Incremental Static Regeneration (ISR) = export const revalidate = 60

- Static page ला एका specific time  slote नतर dynamic page सारख data update करण्यासाठी ISR (export const revalidate = 60) use करतात. याठिकाणी 60 ची value 60 sconds आहे.

- उदाहरण  
- एका static page मध्ये आपण dev mode ला  database मधून data fetch केला. आणि त्याला build केले आणि त्यानंतर जर आपण database च्या data मध्ये काही changes केले तर ते चेंजेस static page च्या output मध्ये reflect hot नाही.

- परंतु जर आपण त्या page च्या code मध्ये ISR (export const revalidate = 60) उसे kele,
तर, database मध्ये changes update केलेल्या data त्या page मध्ये ISR च्या दिलेल्या timeslote नतर automatic reflect/update होतो.

