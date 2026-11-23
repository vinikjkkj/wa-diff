__d(
  "AdsLeadGenFormEditorValidateConditionalLogicRequestCompleteReducerPlugin",
  ["errorCode", "errorDesc", "AdsError", "AdsLeadGenFormEditorConstants"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          if (!n.response.isValid) {
            var a = n.response.errorCodes;
            a.forEach(function (t) {
              switch (t) {
                case 1892229:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      t,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
                  break;
                case 1892230:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      t,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
                  break;
                case 1892231:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      t,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
                  break;
                case 1892232:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      t,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
                  break;
                case 1892233:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      t,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
                  break;
                default:
                  e = e.set(
                    o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                      .QUESTIONS,
                    new (r("AdsError"))(
                      1892228,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    ),
                  );
              }
            });
          }
          return e;
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
