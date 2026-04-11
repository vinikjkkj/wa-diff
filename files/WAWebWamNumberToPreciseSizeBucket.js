__d(
  "WAWebWamNumberToPreciseSizeBucket",
  ["WAWebWamEnumPreciseSizeBucket"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e < 4
        ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT4
        : e < 8
          ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT8
          : e < 16
            ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT16
            : e < 32
              ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT32
              : e < 64
                ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT64
                : e < 128
                  ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET.LT128
                  : e < 256
                    ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET
                        .LT256
                    : e < 512
                      ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET
                          .LT512
                      : e < 1e3
                        ? o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET
                            .LT1000
                        : e < 1500
                          ? o("WAWebWamEnumPreciseSizeBucket")
                              .PRECISE_SIZE_BUCKET.LT1500
                          : e < 2e3
                            ? o("WAWebWamEnumPreciseSizeBucket")
                                .PRECISE_SIZE_BUCKET.LT2000
                            : e < 2500
                              ? o("WAWebWamEnumPreciseSizeBucket")
                                  .PRECISE_SIZE_BUCKET.LT2500
                              : e < 3e3
                                ? o("WAWebWamEnumPreciseSizeBucket")
                                    .PRECISE_SIZE_BUCKET.LT3000
                                : e < 3500
                                  ? o("WAWebWamEnumPreciseSizeBucket")
                                      .PRECISE_SIZE_BUCKET.LT3500
                                  : e < 4e3
                                    ? o("WAWebWamEnumPreciseSizeBucket")
                                        .PRECISE_SIZE_BUCKET.LT4000
                                    : e < 4500
                                      ? o("WAWebWamEnumPreciseSizeBucket")
                                          .PRECISE_SIZE_BUCKET.LT4500
                                      : e < 5e3
                                        ? o("WAWebWamEnumPreciseSizeBucket")
                                            .PRECISE_SIZE_BUCKET.LT5000
                                        : o("WAWebWamEnumPreciseSizeBucket")
                                            .PRECISE_SIZE_BUCKET.LARGEST_BUCKET;
    }
    l.numberToPreciseSizeBucket = e;
  },
  98,
);
