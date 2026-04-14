__d(
  "WAWebMsgViewCount",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebL10N",
    "WAWebL10NNumbersPluginRegistry",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
      return t >= o("WAWebL10NNumbersPluginRegistry").M
        ? e(t, a, n)
        : u(t, a, n);
    }
    function d(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e, [
          o("WAWebMsgGetters").getViewCount,
          o("WAWebMsgGetters").getType,
        ]),
        n = t[0],
        r = t[1];
      return c(n, r);
    }
    ((l.formatViewCount = c), (l.useWAWebLocalizedViewCount = d));
  },
  226,
);
