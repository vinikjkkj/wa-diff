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
      s,
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionUncountUnresolvedPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipUncountUnresolvedPlaceholder"),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionCountShownPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipCountShownPlaceholder"),
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionSweepUnresolvedPlaceholders",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipSweepUnresolvedPlaceholders");
    function m() {
      d().then(
        function (e) {
          var t = e.scheduleUnresolvedPlaceholderSweep;
          return t();
        },
        function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] unresolved placeholder sweep not loaded",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("non-sad");
        },
      );
    }
    function p(e) {
      u().then(
        function (t) {
          var n = t.scheduleUnresolvedPlaceholderCheck;
          return n(e);
        },
        function (t) {
          return f(e, t);
        },
      );
    }
    function _(e) {
      c().then(
        function (t) {
          var n = t.queueCountShownPlaceholderAgain;
          return n(e);
        },
        function (t) {
          return f(e, t);
        },
      );
    }
    function f(e, t) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": unread update not loaded",
            ])),
          e.id,
        )
        .catching(r("getErrorSafe")(t))
        .tags("non-sad");
    }
    ((l.scheduleUnresolvedPlaceholderSweepLoadable = m),
      (l.scheduleUnresolvedPlaceholderCheckLoadable = p),
      (l.countShownPlaceholderAgainLoadable = _));
  },
  98,
);
