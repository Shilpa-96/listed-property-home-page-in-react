const data = [
  {
    location: "8558 Pecan St.",
    id: 1,
    city: "London",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8aXGx75ARhIOyytjCKGlyPIb6Iq2kpEMjVmVcjWkp9XvIrwvGtlE8L8KO11nFcfh80w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
  },
  {
    location: "8558 Parker Rd.",
    id: 2,
    name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
    city: "London",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEkoaEGXb3Ghc46n50h_jbNdiaI1LaWuSmw&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniNtdKkYwFVgfHJm1CQzrQgjhZZwK3Hfgrg&usqp=CAU",
  },
  {
    location: "3890 Poplar Dr.",
    id: 3,
    name: "Regal North Hills - 4150 at North Hills St,, Releigh",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 5256,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-7w51L_JPKFiYovgiAgbS_DJcS_zZTO57w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tZchdvmvLZL69fWf2vx8tOb8t8HwGJiwLw&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 4,
    name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
    city: "London",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSI3JLxQQi9k2YnB-gRoh96unJ7YyryPE4g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tZchdvmvLZL69fWf2vx8tOb8t8HwGJiwLw&usqp=CAU",
  },
  {
    location: "8558 Pecan St.",
    id: 5,
    city: "London",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8aXGx75ARhIOyytjCKGlyPIb6Iq2kpEMjVmVcjWkp9XvIrwvGtlE8L8KO11nFcfh80w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
  },
  {
    location: "8558 Pecan St.",
    id: 6,
    city: "London",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8aXGx75ARhIOyytjCKGlyPIb6Iq2kpEMjVmVcjWkp9XvIrwvGtlE8L8KO11nFcfh80w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 7,
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    city: "London",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSI3JLxQQi9k2YnB-gRoh96unJ7YyryPE4g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-7w51L_JPKFiYovgiAgbS_DJcS_zZTO57w&usqp=CAU",
  },
  {
    location: "8558 Parker Rd.",
    id: 8,
    name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
    city: "London",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEkoaEGXb3Ghc46n50h_jbNdiaI1LaWuSmw&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniNtdKkYwFVgfHJm1CQzrQgjhZZwK3Hfgrg&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 9,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6AIcMv24aMy2o5waJV4wa6IXkGqm3g4IQ&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh4P4pw-GOyzIRfMCwQxthJIveIUAL7PFmQ&usqp=CAU",
  },
  {
    location: "8558 Pecan St.",
    id: 10,
    city: "London",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6AIcMv24aMy2o5waJV4wa6IXkGqm3g4IQ&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh4P4pw-GOyzIRfMCwQxthJIveIUAL7PFmQ&usqp=CAU",
  },

  {
    location: "3890 Poplar Dr.",
    id: 11,
    name: "Regal North Hills - 4150 at North Hills St,, Releigh",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 5256,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tZchdvmvLZL69fWf2vx8tOb8t8HwGJiwLw&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6AIcMv24aMy2o5waJV4wa6IXkGqm3g4IQ&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 12,
    name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
    city: "London",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh4P4pw-GOyzIRfMCwQxthJIveIUAL7PFmQ&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSI3JLxQQi9k2YnB-gRoh96unJ7YyryPE4g&usqp=CAU",
  },
  {
    location: "8558 Parker Rd.",
    id: 13,
    name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6AIcMv24aMy2o5waJV4wa6IXkGqm3g4IQ&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh4P4pw-GOyzIRfMCwQxthJIveIUAL7PFmQ&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 14,
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
  },

  {
    location: "8558 Pecan St.",
    id: 15,
    city: "Paris",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6AIcMv24aMy2o5waJV4wa6IXkGqm3g4IQ&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },
  {
    location: "8558 Parker Rd.",
    id: 16,
    name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tZchdvmvLZL69fWf2vx8tOb8t8HwGJiwLw&usqp=CAU",
  },

  {
    location: "8558 Parker Rd.",
    id: 17,
    name: "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSI3JLxQQi9k2YnB-gRoh96unJ7YyryPE4g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },
  {
    location: "3890 Poplar Dr.",
    id: 18,
    name: "Regal North Hills - 4150 at North Hills St,, Releigh",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 5256,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniNtdKkYwFVgfHJm1CQzrQgjhZZwK3Hfgrg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 19,
    name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-7w51L_JPKFiYovgiAgbS_DJcS_zZTO57w&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 20,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXIvQubtcVPXB4Q5WCjdvhQ_nX8BCy9Yv6A&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 21,
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSI3JLxQQi9k2YnB-gRoh96unJ7YyryPE4g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 22,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-7w51L_JPKFiYovgiAgbS_DJcS_zZTO57w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },

  {
    location: "3890 Poplar Dr.",
    id: 23,
    name: "Regal North Hills - 4150 at North Hills St,, Releigh",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 5256,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 24,
    name: "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoi_ZlVRkdMb77UH59ohhd_STv1uFSOaxyg&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 25,
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: true,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-7w51L_JPKFiYovgiAgbS_DJcS_zZTO57w&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Pecan St.",
    id: 26,
    city: "Mumbai",
    name: "RCE Theaters-907 Beckford DR, HEnderson, NC 27536",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7233,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXIvQubtcVPXB4Q5WCjdvhQ_nX8BCy9Yv6A&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 27,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 28,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 29,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 30,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "New York",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 31,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 32,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 33,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Mumbai",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 34,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 35,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
  {
    location: "8558 Green Rd.",
    id: 36,
    name: "Dollar General - 5146 Rock Quary RD, Raleigh, NC 27610",
    city: "Paris",
    room: 3,
    bed: 4,
    bath: 1,
    area: 732,
    emi: 7255,
    popular: false,
    img01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00tBq315K3D-ouNbO6TtrM7mcu-sDGB480g&usqp=CAU",
    img02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO6enwWqg2Lz2zhd48M8JFv-aORfoXi7Y8Q&usqp=CAU",
  },
];

export default data;
