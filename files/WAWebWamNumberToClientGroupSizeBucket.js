__d(
  "WAWebWamNumberToClientGroupSizeBucket",
  ["WAWebWamEnumClientGroupSizeBucket"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e <= 33
        ? o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.SMALL
        : e <= 65
          ? o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET
              .MEDIUM
          : e <= 129
            ? o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET
                .LARGE
            : e <= 257
              ? o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET
                  .EXTRA_LARGE
              : e <= 513
                ? o("WAWebWamEnumClientGroupSizeBucket")
                    .CLIENT_GROUP_SIZE_BUCKET.XX_LARGE
                : e <= 1025
                  ? o("WAWebWamEnumClientGroupSizeBucket")
                      .CLIENT_GROUP_SIZE_BUCKET.LT1024
                  : e <= 1501
                    ? o("WAWebWamEnumClientGroupSizeBucket")
                        .CLIENT_GROUP_SIZE_BUCKET.LT1500
                    : e <= 2001
                      ? o("WAWebWamEnumClientGroupSizeBucket")
                          .CLIENT_GROUP_SIZE_BUCKET.LT2000
                      : e <= 2501
                        ? o("WAWebWamEnumClientGroupSizeBucket")
                            .CLIENT_GROUP_SIZE_BUCKET.LT2500
                        : e <= 3001
                          ? o("WAWebWamEnumClientGroupSizeBucket")
                              .CLIENT_GROUP_SIZE_BUCKET.LT3000
                          : e <= 3501
                            ? o("WAWebWamEnumClientGroupSizeBucket")
                                .CLIENT_GROUP_SIZE_BUCKET.LT3500
                            : e <= 4001
                              ? o("WAWebWamEnumClientGroupSizeBucket")
                                  .CLIENT_GROUP_SIZE_BUCKET.LT4000
                              : e <= 4501
                                ? o("WAWebWamEnumClientGroupSizeBucket")
                                    .CLIENT_GROUP_SIZE_BUCKET.LT4500
                                : e <= 5001
                                  ? o("WAWebWamEnumClientGroupSizeBucket")
                                      .CLIENT_GROUP_SIZE_BUCKET.LT5000
                                  : o("WAWebWamEnumClientGroupSizeBucket")
                                      .CLIENT_GROUP_SIZE_BUCKET.LARGEST_BUCKET;
    }
    l.default = e;
  },
  98,
);
