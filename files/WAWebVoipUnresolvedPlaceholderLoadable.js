__d(
  "WAWebVoipUnresolvedPlaceholderLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionUncountUnresolvedPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipUncountUnresolvedPlaceholder"),
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionCountShownPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipCountShownPlaceholder");
    function c(e) {
      s().then(
        function (t) {
          var n = t.scheduleUnresolvedPlaceholderCheck;
          return n(e);
        },
        function (t) {
          return m(e, t);
        },
      );
    }
    function d(e) {
      u().then(
        function (t) {
          var n = t.queueCountShownPlaceholderAgain;
          return n(e);
        },
        function (t) {
          return m(e, t);
        },
      );
    }
    function m(t, n) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": unread update not loaded",
            ])),
          t.id,
        )
        .catching(r("getErrorSafe")(n))
        .tags("non-sad");
    }
    ((l.scheduleUnresolvedPlaceholderCheckLoadable = c),
      (l.countShownPlaceholderAgainLoadable = d));
  },
  98,
);
