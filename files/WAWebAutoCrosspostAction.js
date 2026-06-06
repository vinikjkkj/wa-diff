__d(
  "WAWebAutoCrosspostAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebActionToast.react",
    "WAWebCrosspostingQplUtils",
    "WAWebMediaOpaqueData",
    "WAWebSettingsModel",
    "WAWebToastManager",
    "WAWebUserPrefsStatus",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    async function d(t) {
      if (
        r("WAWebSettingsModel").linkState ===
        o("WAWebAccountLinkingConstants").AccountLinkState.Active
      ) {
        var n = await Promise.all([
            r("WAWebUserPrefsStatus").getShareToFB(),
            r("WAWebUserPrefsStatus").getShareToIG(),
          ]),
          a = n[0],
          i = n[1],
          l = [];
        if (
          (a && r("WAWebSettingsModel").isFBLinked && l.push("F"),
          i && r("WAWebSettingsModel").isIGLinked && l.push("I"),
          l.length !== 0)
        ) {
          if (
            (o("WAWebCrosspostingQplUtils").crosspostingQplStart(),
            o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
              o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                .INIT_CROSSPOST,
            ),
            o("WAWebCrosspostingQplUtils").crosspostingQplAnnotate({
              string: { entrypoint: "auto_xpost_status_share_view" },
              bool: {
                is_destination_fb: l.includes("F"),
                is_destination_ig: l.includes("I"),
                is_auto_crosspost_setting_fb: a,
                is_auto_crosspost_setting_ig: i,
                is_crosspost_experience_v2_at_start: !1,
              },
            }),
            t.type === "video")
          ) {
            var u,
              d,
              p = parseFloat(
                (u = (d = t.mediaData) == null ? void 0 : d.duration) != null
                  ? u
                  : "0",
              );
            if (p > 60) {
              (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                  .SEE_CROSSPOST_ERROR,
              ),
                o("WAWebCrosspostingQplUtils").crosspostingQplEndFail());
              return;
            }
          }
          var _ = await Promise.all([
              r("JSResourceForInteraction")("WAWebCrosspostingJob")
                .__setRef("WAWebAutoCrosspostAction")
                .load(),
              r("JSResourceForInteraction")("WAWebTextStatusImageRenderer")
                .__setRef("WAWebAutoCrosspostAction")
                .load(),
              r("JSResourceForInteraction")("WAWebCrosspostingConfig")
                .__setRef("WAWebAutoCrosspostAction")
                .load(),
            ]),
            f = _[0],
            g = _[1],
            h = _[2],
            y = f.crosspostStatus,
            C = g.isTextStatusMessage,
            b = g.renderTextStatusToBlob,
            v = h.getAutoCrosspostFailureToastMsg,
            S = h.getAutoCrosspostPendingToastMsg,
            R = h.getAutoCrosspostSuccessToastMsg,
            L;
          try {
            L = await m(t, C, b);
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Auto-crosspost: failed to get status blob: ",
                    "",
                  ])),
                String(t),
              )
              .sendLogs("auto-crosspost-blob-error"),
              o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                  .SEE_CROSSPOST_ERROR,
              ),
              o("WAWebCrosspostingQplUtils").crosspostingQplEndFail());
            return;
          }
          if (L == null) {
            (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
              o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                .SEE_CROSSPOST_ERROR,
            ),
              o("WAWebCrosspostingQplUtils").crosspostingQplEndFail());
            return;
          }
          var E = new (o("WAWebActionToast.react").ActionType)(S(l)),
            k = y(t.t, t.id, l, L, t.caption)
              .then(function () {
                var e;
                return (
                  (e = o("WAWebCrosspostingQplUtils")).crosspostingQplPoint(
                    e.CrosspostingQplPoints.FINISH_CROSSPOST,
                  ),
                  e.crosspostingQplPoint(
                    e.CrosspostingQplPoints.SEE_CROSSPOST_SUCCESS,
                  ),
                  e.crosspostingQplEndSuccess(),
                  new (o("WAWebActionToast.react").ActionType)(R(l))
                );
              })
              .catch(function (e) {
                var t;
                return (
                  (t = o("WAWebCrosspostingQplUtils")).crosspostingQplPoint(
                    t.CrosspostingQplPoints.FINISH_CROSSPOST,
                  ),
                  t.crosspostingQplPoint(
                    t.CrosspostingQplPoints.SEE_CROSSPOST_ERROR,
                  ),
                  t.crosspostingQplEndFail(),
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Auto-crosspost failed: ",
                          "",
                        ])),
                      String(e),
                    )
                    .sendLogs("auto-crosspost-failed"),
                  new (o("WAWebActionToast.react").ActionType)(v(l))
                );
              });
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: E,
              pendingAction: k,
            }),
          );
        }
      }
    }
    async function m(e, t, n) {
      var o;
      if (t(e)) return n(e);
      var a = (o = e.mediaData) == null ? void 0 : o.mediaBlob;
      return a instanceof r("WAWebMediaOpaqueData") ? a.getBlob() : a;
    }
    l.triggerAutoCrosspostIfEnabled = d;
  },
  98,
);
