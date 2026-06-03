__d(
  "WAWebVoipTimeSeriesUpload",
  [
    "WABinary",
    "WALogger",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashlogConstants",
    "WAWebCrashlogUserAgent",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebVoipPersistentFS",
    "WAWebZip",
    "asyncToGeneratorRuntime",
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
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k = 268435456,
      I = "voip_time_series",
      T = "https://crashlogs.whatsapp.net/whatson_logs_upload",
      D = "986260562965669|dce80b34bf101b13140cbbf4c809d9ac";
    function x(e) {
      var t = new FormData(),
        n = r("WAWebBrowserInfo")(),
        a = o("WAWebCrashlogUserAgent").getLogUserAgent({
          device: n.os,
          browser: n.ua,
          appVersion: o("WAWebBuildConstants").VERSION_BASE,
        });
      t.append("agent", a);
      var i = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      (t.append(
        "from_jid",
        i != null ? i.toString() : o("WAWebUserPrefsMeUser").getUnknownId(),
      ),
        t.append("tags", I),
        t.append("app_id", o("WAWebCrashlogConstants").FB_APP_ID),
        t.append("build_id", o("WAWebCrashlogConstants").BUILD_ID),
        t.append("call_id", e.callId));
      var l = e.participantEntries.length;
      return (
        l > 0 &&
          (t.append("additional_metadata[num_participants]", String(l)),
          t.append("additional_metadata[max_participants]", String(l))),
        e.connectTime != null &&
          t.append("additional_metadata[connect_time]", String(e.connectTime)),
        e.videoCall != null &&
          t.append("additional_metadata[video_call]", String(e.videoCall)),
        t.append("additional_metadata[call_result]", String(e.result)),
        t
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.timeSeriesPath == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[VoIP TS Upload] no time-series path, skip",
                ])),
            );
            return;
          }
          var a = t.timeSeriesPath;
          try {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[VoIP TS Upload] Starting upload for call: ",
                  "",
                ])),
              t.callId,
            ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Time-series directory: ",
                    "",
                  ])),
                a,
              ));
            var i = n.FS;
            if (!i) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] WASM FS not available, skipping upload",
                  ])),
              );
              return;
            }
            var l;
            try {
              ((l = i.readdir(a)),
                (l = l.filter(function (e) {
                  return e !== "." && e !== "..";
                })));
            } catch (e) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] Failed to read directory ",
                    ": ",
                    "",
                  ])),
                a,
                String(e),
              );
              return;
            }
            if (l.length === 0) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] No files found in directory ",
                    "",
                  ])),
                a,
              );
              return;
            }
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[VoIP TS Upload] Found ",
                  " segment files: ",
                  "",
                ])),
              l.length,
              l.join(", "),
            );
            var $ = new (r("WAWebZip"))(),
              P = 0,
              N = [];
            for (var M of l) {
              var w = a + "/" + M;
              try {
                var A = i.readFile(w),
                  F = new (o("WABinary").Binary)(A);
                ($.add(F, M),
                  (P += A.length),
                  N.push({ name: M, size: A.length }));
              } catch (e) {
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[VoIP TS Upload] Failed to read file ",
                      ": ",
                      "",
                    ])),
                  w,
                  String(e),
                );
              }
            }
            if (
              (N.length > 0 &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[VoIP TS Upload] Added ",
                      " files to ZIP. Examples: ",
                      "",
                    ])),
                  N.length,
                  N.slice(0, 3).map(function (e) {
                    return e.name + " (" + e.size + " bytes)";
                  }),
                ),
              P > k)
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] size ",
                    " > max ",
                    ", skip",
                  ])),
                P,
                k,
              );
              return;
            }
            var O = $.create(),
              B = new Blob([O.readByteArrayView()], {
                type: "application/zip",
              });
            if (
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] ZIP created, size=",
                    " orig=",
                    "",
                  ])),
                B.size,
                P,
              ),
              B.size > k)
            ) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] ZIP ",
                    " > max ",
                    ", skip",
                  ])),
                B.size,
                k,
              );
              return;
            }
            var W = x(t),
              q = t.callId + "_timeseries.zip";
            W.append("file", B, q);
            var U = r("WAWebURLUtils").build(T, { access_token: D, type: I }),
              V = yield self.fetch(U, { method: "POST", body: W });
            if (V.status === 200) {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] uploaded call=",
                    " size=",
                    "",
                  ])),
                t.callId,
                B.size,
              );
              for (var H of l)
                try {
                  i.unlink(a + "/" + H);
                } catch (e) {
                  o("WALogger").WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] Failed to cleanup file ",
                        ": ",
                        "",
                      ])),
                    H,
                    String(e),
                  );
                }
              try {
                (i.rmdir(a),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoIP TS Upload] Cleaned up directory ",
                        "",
                      ])),
                    a,
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[VoIP TS Upload] Failed to remove directory ",
                      ": ",
                      "",
                    ])),
                  a,
                  String(e),
                );
              }
              try {
                yield o("WAWebVoipPersistentFS").syncPersistentFS(n);
              } catch (e) {
                o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[VoIP TS Upload] Failed to sync filesystem deletions: ",
                      "",
                    ])),
                  String(e),
                );
              }
            } else {
              var G = yield V.text();
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoIP TS Upload] failed status=",
                    " call=",
                    " ",
                    "",
                  ])),
                V.status,
                t.callId,
                G,
              );
            }
          } catch (e) {
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[VoIP TS Upload] Failed to upload time-series logs: ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    l.uploadTimeSeriesLogsAsync = $;
  },
  98,
);
