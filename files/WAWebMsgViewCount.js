__d(
  "WAWebMsgViewCount",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebL10N",
    "WAWebL10NNumbersPluginRegistry",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      switch (n) {
        case o("WAWebMsgType").MSG_TYPE.PTT:
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(
            /*BTDS*/ '_j{"*":"{number} listeners","_1":"1 listener"}',
            [
              s._plural(
                o("WAWebCommonNewsletterStrings").roundToThousands(e),
                "number",
                t,
              ),
            ],
          );
        default:
          return s._(/*BTDS*/ '_j{"*":"{number} viewers","_1":"1 viewer"}', [
            s._plural(
              o("WAWebCommonNewsletterStrings").roundToThousands(e),
              "number",
              t,
            ),
          ]);
      }
    }
    function u(e, t, n) {
      switch (n) {
        case o("WAWebMsgType").MSG_TYPE.PTT:
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(
            /*BTDS*/ '_j{"*":"{number} listeners","_1":"1 listener"}',
            [
              s._plural(
                o("WAWebCommonNewsletterStrings").roundToThousands(e),
                "number",
                t,
              ),
            ],
          );
        default:
          return s._(/*BTDS*/ '_j{"*":"{number} viewers","_1":"1 viewer"}', [
            s._plural(
              o("WAWebCommonNewsletterStrings").roundToThousands(e),
              "number",
              t,
            ),
          ]);
      }
    }
    function c(t, n) {
      if (t == null || t === 0) return null;
      var a = r("WAWebL10N").d(t);
      return o(
        "WAWebNewsletterGatingUtils",
      ).isNewsletterViewsVPVDefinitionEnabled()
        ? a
        : t >= o("WAWebL10NNumbersPluginRegistry").M
          ? e(t, a, n)
          : u(t, a, n);
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebMsgGetters").getViewCount,
            o("WAWebMsgGetters").getType,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebMsgValues").useMsgValues(e, n),
        a = r[0],
        i = r[1],
        l;
      return (
        t[1] !== i || t[2] !== a
          ? ((l = c(a, i)), (t[1] = i), (t[2] = a), (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    ((l.formatViewCount = c), (l.useWAWebLocalizedViewCount = d));
  },
  226,
);
