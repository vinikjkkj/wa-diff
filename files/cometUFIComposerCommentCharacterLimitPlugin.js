__d(
  "cometUFIComposerCommentCharacterLimitPlugin",
  [
    "errorCode",
    "errorDesc",
    "CometWallConstants",
    "FDSText.react",
    "MLCCharacterLimitCountPlugin.react",
    "cometUFIComposerCommentCharacterLimitPlugin_plugin.graphql",
    "errorSummary",
    "lengthInUTF8Bytes",
    "react",
    "useCometAlertDialog",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState;
    e !== void 0 ||
      (e = n("cometUFIComposerCommentCharacterLimitPlugin_plugin.graphql"));
    function h(e) {
      "use no forget";
      var t = e.pluginProps.addCommitListener,
        n = r("useCometAlertDialog")(),
        o = f(0),
        a = g(0),
        i = a[0],
        l = a[1],
        s = p(function (e) {
          e <= 0 ? ((o.current = -e), l(-e)) : ((o.current = 0), l(0));
        }, []);
      return (
        _(
          function () {
            return t(function () {
              if (o.current > 0) {
                var e = 1446011,
                  t = r("errorSummary")._(function (e) {
                    return e._(/*BTDS*/ "Comment is Too Long");
                  }),
                  a = u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "Comments can't be longer than 8,000 characters. Try shortening your comment.",
                    );
                  }, {});
                return (
                  e != null &&
                    t != null &&
                    a != null &&
                    n({ body: a, title: t }),
                  "block-commit"
                );
              }
              return "continue-commit";
            });
          },
          [t, n],
        ),
        d.jsxs(d.Fragment, {
          children: [
            d.jsx(r("MLCCharacterLimitCountPlugin.react"), {
              limit: r("CometWallConstants").COMMENT_MAX_LENGTH,
              onChange: s,
              strlen: r("lengthInUTF8Bytes"),
            }),
            i > 0 &&
              d.jsx(r("FDSText.react"), {
                color: "negative",
                testid: void 0,
                type: "body3",
                children: -i,
              }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return {
        above: null,
        action: null,
        below: null,
        id: "comment_COMMENT_MAX_LENGTH",
        inside: h,
        props: {},
      };
    }
    l.default = y;
  },
  226,
);
