__d(
  "WAWebAutoCrosspostAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebActionToast.react",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebCrosspostingQplUtils",
    "WAWebMediaOpaqueData",
    "WAWebSettingsModel",
    "WAWebToastManager",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o(
              "WAWebCrosspostingBackendGatingUtils",
            ).statusCrosspostingEnabled() &&
            r("WAWebSettingsModel").linkState ===
              o("WAWebAccountLinkingConstants").AccountLinkState.Active
          ) {
            var a = yield (u || (u = n("Promise"))).all([
                r("WAWebUserPrefsStatus").getShareToFB(),
                r("WAWebUserPrefsStatus").getShareToIG(),
              ]),
              i = a[0],
              l = a[1],
              c = [];
            if (
              (i && r("WAWebSettingsModel").isFBLinked && c.push("F"),
              l && r("WAWebSettingsModel").isIGLinked && c.push("I"),
              c.length !== 0)
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
                    is_destination_fb: c.includes("F"),
                    is_destination_ig: c.includes("I"),
                    is_auto_crosspost_setting_fb: i,
                    is_auto_crosspost_setting_ig: l,
                    is_crosspost_experience_v2_at_start: !1,
                  },
                }),
                t.type === "video")
              ) {
                var m,
                  p,
                  f = parseFloat(
                    (m = (p = t.mediaData) == null ? void 0 : p.duration) !=
                      null
                      ? m
                      : "0",
                  );
                if (f > 60) {
                  (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                    o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                      .SEE_CROSSPOST_ERROR,
                  ),
                    o("WAWebCrosspostingQplUtils").crosspostingQplEndFail());
                  return;
                }
              }
              var g = yield u.all([
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
                h = g[0],
                y = g[1],
                C = g[2],
                b = h.crosspostStatus,
                v = y.isTextStatusMessage,
                S = y.renderTextStatusToBlob,
                R = C.getAutoCrosspostFailureToastMsg,
                L = C.getAutoCrosspostPendingToastMsg,
                E = C.getAutoCrosspostSuccessToastMsg,
                k;
              try {
                k = yield _(t, v, S);
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
              if (k == null) {
                (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                  o("WAWebCrosspostingQplUtils").CrosspostingQplPoints
                    .SEE_CROSSPOST_ERROR,
                ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplEndFail());
                return;
              }
              var I = new (o("WAWebActionToast.react").ActionType)(L(c)),
                T = b(t.t, t.id, c, k, t.caption)
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
                      new (o("WAWebActionToast.react").ActionType)(E(c))
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
                      new (o("WAWebActionToast.react").ActionType)(R(c))
                    );
                  });
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebActionToast.react").ActionToast, {
                  initialAction: I,
                  pendingAction: T,
                }),
              );
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var o;
          if (t(e)) return n(e);
          var a = (o = e.mediaData) == null ? void 0 : o.mediaBlob;
          return a instanceof r("WAWebMediaOpaqueData") ? a.getBlob() : a;
        })),
        f.apply(this, arguments)
      );
    }
    l.triggerAutoCrosspostIfEnabled = m;
  },
  98,
);
