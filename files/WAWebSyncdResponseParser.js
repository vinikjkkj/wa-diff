__d(
  "WAWebSyncdResponseParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdDecode",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = new (r("WADeprecatedWapParser"))("syncResponseParser", function (t) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: start parsing syncd collections",
            ])),
        );
        var n = [],
          r = t.child("sync");
        return (
          r.mapChildrenWithTag("collection", function (e) {
            var t = o("WASyncdConst").CollectionName.cast(e.attrString("name"));
            if (!t)
              throw new (o("WAWebSyncdError").SyncdFatalError)(
                "invalid collection name",
              );
            var r = h(e, t),
              a = { name: t, state: r };
            (e.hasAttr("version") &&
              (a.version = parseInt(e.attrString("version"), 10)),
              e.hasChild("patches") &&
                (a.patches = e
                  .child("patches")
                  .mapChildrenWithTag("patch", function (e) {
                    return o("WAWebSyncdDecode").decodeSyncdPatch(
                      t,
                      e.contentBytes(),
                    );
                  })),
              e.hasChild("snapshot") &&
                (a.snapshot = o("WAWebSyncdDecode").decodeExternalBlobReference(
                  t,
                  e.child("snapshot").contentBytes(),
                )),
              n.push(a),
              a.version == null &&
                a.patches == null &&
                a.snapshot == null &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: collection ",
                      " has no version, patches or snapshot",
                    ])),
                  t,
                ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: successfully parsed collection ",
                    "",
                  ])),
                t,
              ));
          }),
          n
        );
      });
    function h(e, t) {
      if (e.hasAttr("type") && e.attrString("type") === "error") {
        var n = e.child("error"),
          r = n.attrString("code"),
          a = n.attrString("text");
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: collection ",
              " got server error: ",
              "",
            ])),
          t,
          r,
        );
        e: {
          if (r === "409")
            return e.hasAttr("has_more_patches")
              ? o("WASyncdConst").CollectionState.ConflictHasMore
              : o("WASyncdConst").CollectionState.Conflict;
          if (r === "400") {
            return (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .XMPP_BAD_REQUEST_FOR_COLLECTION,
              ),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error: collection ",
                      " throws ",
                      "",
                    ])),
                  String(t),
                  a,
                )
                .sendLogs("syncd: fatal error 400: collection " + String(t)),
              o("WASyncdConst").CollectionState.ErrorFatal
            );
            break e;
          }
          if (r === "404") {
            return (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .XMPP_NOT_FOUND_FOR_COLLECTION,
              ),
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error 404: collection ",
                      " throws ",
                      "",
                    ])),
                  String(t),
                  a,
                )
                .sendLogs("syncd: fatal error: collection " + String(t)),
              o("WASyncdConst").CollectionState.ErrorFatal
            );
            break e;
          }
          {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: retryable error: collection ",
                      " throws ",
                      "",
                    ])),
                  String(t),
                  a,
                )
                .sendLogs("syncd: retryable error: collection " + String(t)),
              o("WASyncdConst").CollectionState.ErrorRetry
            );
            break e;
          }
        }
      } else
        return e.hasAttr("has_more_patches")
          ? (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: collection ",
                  " got server code has_more_patches",
                ])),
              t,
            ),
            o("WASyncdConst").CollectionState.SuccessHasMore)
          : (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: collection ",
                  " did not get server error",
                ])),
              t,
            ),
            o("WASyncdConst").CollectionState.Success);
    }
    l.syncResponseParser = g;
  },
  98,
);
