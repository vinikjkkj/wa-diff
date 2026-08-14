__d(
  "LSThreadBitOffset",
  ["FBLogger", "I64", "LSBitFlag", "isUnjoinedCMThread"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "capabilities",
        "capabilities2",
        "capabilities3",
        "capabilities4",
        "capabilities5",
        "capabilities6",
      ],
      u = 6,
      c = u * 64;
    function d(t, n) {
      return o("isUnjoinedCMThread").isUnjoinedCMThread(n.threadType)
        ? !1
        : t >= c
          ? (r("FBLogger")(
              "LSThreadBitOffset",
              "out_of_bounds_bit_offset",
            ).mustfix(
              "Invalid bitOffset; expected a value between 0 and %d but found %s instead",
              c - 1,
              t,
            ),
            !1)
          : t >= 320
            ? o("LSBitFlag").has(
                (e || (e = o("I64"))).lsl_(e.one, t - 320),
                n.capabilities6,
              )
            : t >= 256
              ? o("LSBitFlag").has(
                  (e || (e = o("I64"))).lsl_(e.one, t - 256),
                  n.capabilities5,
                )
              : t >= 192
                ? o("LSBitFlag").has(
                    (e || (e = o("I64"))).lsl_(e.one, t - 192),
                    n.capabilities4,
                  )
                : t >= 128
                  ? o("LSBitFlag").has(
                      (e || (e = o("I64"))).lsl_(e.one, t - 128),
                      n.capabilities3,
                    )
                  : t >= 64
                    ? o("LSBitFlag").has(
                        (e || (e = o("I64"))).lsl_(e.one, t - 64),
                        n.capabilities2,
                      )
                    : o("LSBitFlag").has(
                        (e || (e = o("I64"))).lsl_(e.one, t),
                        n.capabilities,
                      );
    }
    function m(t, n, r, a, i, l) {
      return t.reduce(
        function (t, n) {
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = t[4];
          return n >= 256
            ? [
                r,
                a,
                i,
                l,
                o("LSBitFlag").set(
                  (e || (e = o("I64"))).lsl_(e.one, n - 256),
                  s,
                ),
              ]
            : n >= 192
              ? [
                  r,
                  a,
                  i,
                  o("LSBitFlag").set(
                    (e || (e = o("I64"))).lsl_(e.one, n - 192),
                    l,
                  ),
                  s,
                ]
              : n >= 128
                ? [
                    r,
                    a,
                    o("LSBitFlag").set(
                      (e || (e = o("I64"))).lsl_(e.one, n - 128),
                      i,
                    ),
                    l,
                    s,
                  ]
                : n >= 64
                  ? [
                      r,
                      o("LSBitFlag").set(
                        (e || (e = o("I64"))).lsl_(e.one, n - 64),
                        a,
                      ),
                      i,
                      l,
                      s,
                    ]
                  : [
                      o("LSBitFlag").set(
                        (e || (e = o("I64"))).lsl_(e.one, n),
                        r,
                      ),
                      a,
                      i,
                      l,
                      s,
                    ];
        },
        [n, r, a, i, l],
      );
    }
    function p(t, n, r, a, i, l) {
      return t.reduce(
        function (t, n) {
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = t[4];
          return n >= 256
            ? [
                r,
                a,
                i,
                l,
                o("LSBitFlag").clear(
                  (e || (e = o("I64"))).lsl_(e.one, n - 256),
                  s,
                ),
              ]
            : n >= 192
              ? [
                  r,
                  a,
                  i,
                  o("LSBitFlag").clear(
                    (e || (e = o("I64"))).lsl_(e.one, n - 192),
                    l,
                  ),
                  s,
                ]
              : n >= 128
                ? [
                    r,
                    a,
                    o("LSBitFlag").clear(
                      (e || (e = o("I64"))).lsl_(e.one, n - 128),
                      i,
                    ),
                    l,
                    s,
                  ]
                : n >= 64
                  ? [
                      r,
                      o("LSBitFlag").clear(
                        (e || (e = o("I64"))).lsl_(e.one, n - 64),
                        a,
                      ),
                      i,
                      l,
                      s,
                    ]
                  : [
                      o("LSBitFlag").clear(
                        (e || (e = o("I64"))).lsl_(e.one, n),
                        r,
                      ),
                      a,
                      i,
                      l,
                      s,
                    ];
        },
        [n, r, a, i, l],
      );
    }
    ((l.threadCapabilityFields = s),
      (l.MAX_SUPPORTED_THREAD_CAPABILITY = u),
      (l.has = d),
      (l.set = m),
      (l.clear = p),
      (l.empty = (e || (e = o("I64"))).zero));
  },
  98,
);
