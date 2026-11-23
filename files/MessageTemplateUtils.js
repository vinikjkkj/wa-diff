__d(
  "MessageTemplateUtils",
  [
    "adsMessengerDataModelGetIceBreaker",
    "adsMessengerDataModelSetIceBreaker",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i,
        l,
        s = a,
        u = r("adsMessengerDataModelGetIceBreaker")(s, e);
      switch (n) {
        case "title":
          if (t === u.title) return;
          (r("setByPath")(s, ["user_edit"], !0),
            r("setByPath")(s, ["ice_breakers_edited"], !0),
            o(
              r("adsMessengerDataModelSetIceBreaker")(
                s,
                e,
                babelHelpers.extends({}, u, ((i = {}), (i.title = t), i)),
              ),
            ));
          break;
        case "response":
          if (t === u.response) return;
          (r("setByPath")(s, ["user_edit"], !0),
            r("setByPath")(s, ["ice_breakers_edited"], !0),
            o(
              r("adsMessengerDataModelSetIceBreaker")(
                s,
                e,
                babelHelpers.extends({}, u, ((l = {}), (l.response = t), l)),
              ),
            ));
          break;
      }
    }
    l.onIcebreakerChange = e;
  },
  98,
);
