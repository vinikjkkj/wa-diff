__d(
  "WAMediaQplHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null || e < 0 || e > 1e3 * 1024 * 1024
        ? "invalid_size"
        : e === 0
          ? "size equal to 0KB"
          : e <= 1 * 1024
            ? "size lower than 1 KB"
            : e <= 50 * 1024
              ? "size between 1 KB and 50 KB"
              : e <= 100 * 1024
                ? "size between 50 KB and 100 KB"
                : e <= 500 * 1024
                  ? "size between 100 KB and 500 KB"
                  : e <= 1 * 1024 * 1024
                    ? "size between 500 KB and 1 MB"
                    : e <= 2 * 1024 * 1024
                      ? "size between 1 MB and 2 MB"
                      : e <= 5 * 1024 * 1024
                        ? "size between 2 MB and 5 MB"
                        : e <= 10 * 1024 * 1024
                          ? "size between 5 MB and 10 MB"
                          : e <= 20 * 1024 * 1024
                            ? "size between 10 MB and 20 MB"
                            : e <= 25 * 1024 * 1024
                              ? "size between 20 MB and 25 MB"
                              : e <= 30 * 1024 * 1024
                                ? "size between 25 MB and 30 MB"
                                : e <= 50 * 1024 * 1024
                                  ? "size between 30 MB and 50 MB"
                                  : e <= 75 * 1024 * 1024
                                    ? "size between 50 MB and 75 MB"
                                    : e <= 100 * 1024 * 1024
                                      ? "size between 75 MB and 100 MB"
                                      : "size above 100 MB";
    }
    i.convertIntegerSizeToStringBucket = e;
  },
  66,
);
