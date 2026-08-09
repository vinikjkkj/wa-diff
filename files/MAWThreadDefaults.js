__d(
  "MAWThreadDefaults",
  ["fbt", "I64", "LSBitOffset", "LSIntEnum", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c;
    function d() {
      return r("qex")._("327") === !0;
    }
    function m(e) {
      return d()
        ? o("LSBitOffset").set((c || (c = o("LSIntEnum"))).ofNumber(42), e)
        : e;
    }
    function p(e) {
      return o("LSBitOffset").set((c || (c = o("LSIntEnum"))).ofNumber(4), e);
    }
    var _ = (e = o("LSBitOffset")).set(
        (c || (c = o("LSIntEnum"))).ofNumber(18),
        o("LSBitOffset").set(
          c.ofNumber(56),
          o("LSBitOffset").set(
            c.ofNumber(14),
            o("LSBitOffset").set(
              c.ofNumber(23),
              o("LSBitOffset").set(
                c.ofNumber(8),
                o("LSBitOffset").set(
                  c.ofNumber(15),
                  o("LSBitOffset").set(c.ofNumber(2), o("LSBitOffset").empty),
                ),
              ),
            ),
          ),
        ),
      ),
      f = m(
        p(
          o("LSBitOffset").set(
            c.ofNumber(7),
            o("LSBitOffset").set(
              c.ofNumber(6),
              o("LSBitOffset").set(
                c.ofNumber(9),
                o("LSBitOffset").set(
                  c.ofNumber(10),
                  o("LSBitOffset").set(
                    c.ofNumber(19),
                    o("LSBitOffset").set(
                      c.ofNumber(35),
                      o("LSBitOffset").set(
                        c.ofNumber(3),
                        o("LSBitOffset").set(c.ofNumber(43), _),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      g = o("LSBitOffset").set(
        c.ofNumber(17),
        o("LSBitOffset").set(
          c.ofNumber(60),
          o("LSBitOffset").set(
            c.ofNumber(16),
            o("LSBitOffset").set(
              c.ofNumber(26),
              o("LSBitOffset").set(
                c.ofNumber(28),
                o("LSBitOffset").clear(c.ofNumber(27), f),
              ),
            ),
          ),
        ),
      ),
      h = o("LSBitOffset").set(
        (u || (u = o("I64"))).sub(c.ofNumber(103), u.of_string("64")),
        o("LSBitOffset").set(
          u.sub(c.ofNumber(85), u.of_string("64")),
          o("LSBitOffset").set(
            u.sub(c.ofNumber(109), u.of_string("64")),
            o("LSBitOffset").set(
              u.sub(c.ofNumber(74), u.of_string("64")),
              o("LSBitOffset").set(
                u.sub(c.ofNumber(65), u.of_string("64")),
                o("LSBitOffset").set(
                  u.sub(c.ofNumber(64), u.of_string("64")),
                  o("LSBitOffset").set(
                    u.sub(c.ofNumber(106), u.of_string("64")),
                    o("LSBitOffset").empty,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      y = s
        ._(/*BTDS*/ "Messages are secured with end-to-end encryption.")
        .toString(),
      C = o("LSBitOffset").set(
        u.sub(c.ofNumber(172), u.of_string("64")),
        o("LSBitOffset").set(
          u.sub(c.ofNumber(170), u.of_string("64")),
          o("LSBitOffset").empty,
        ),
      );
    ((l.defaultThreadCapabilities = f),
      (l.defaultGroupThreadCapabilities = g),
      (l.defaultThreadCapabilities_2 = h),
      (l.nullstateDescriptionText1 = y),
      (l.defaultThreadCapabilities_3 = C),
      (l.defaultThreadCapabilities_4 = o("LSBitOffset").empty),
      (l.defaultThreadCapabilities_5 = o("LSBitOffset").empty));
  },
  226,
);
