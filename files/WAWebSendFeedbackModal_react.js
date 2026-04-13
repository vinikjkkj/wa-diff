__d(
  "WAWebSendFeedbackModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WASmaxBugReportingReportBugRPC",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebBugReportSessionWamEvent",
    "WAWebClickableLink.react",
    "WAWebClientServerJoinKeyGenerator",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebCrashlog",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLoggerDebugInfo",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebScreenshotUpload.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBugReportSubmitMutation",
    "WAWebText.react",
    "WAWebTextLineClamp.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumBugReportFlowAction",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWdsPictoSucessCelebrationTickIcon.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = 5e3,
      g = 10,
      h = {
        feedbackField: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderBottomWidth: "xv7zg05",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xhl97hz x1vtqnfi",
          $$css: !0,
        },
        buttonGroup: {
          marginTop: "x1sy10c2",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
      },
      y = n("$InternalEnum").Mirrored(["FORM", "SUCCESS"]),
      C = { titleContainer: { textAlign: "x2b8uid", $$css: !0 } };
    function b(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== e || n[1] !== t
        ? ((r = function () {
            new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.BUG_REPORT_FORM_IMPRESSION,
              bugReportingEntryPoint: e,
              clientServerJoinKey: t,
            }).commit();
          }),
          (a = [e, t]),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        m(r, a));
    }
    function v(t) {
      var a = t.bugReportingEntryPoint,
        i = t.clientServerJoinKey,
        l = t.onCancel,
        u = t.onComplete,
        d = t.onSubmit;
      b(a, i);
      var y = _(""),
        C = y[0],
        v = y[1],
        S = _({ state: "none", mediaFiles: [] }),
        R = S[0],
        L = S[1],
        E = _(!1),
        k = E[0],
        I = E[1],
        $ = _(!1),
        P = $[0],
        N = $[1],
        M = _(!1),
        w = M[0],
        A = M[1],
        F = _(!1),
        O = F[0],
        B = F[1],
        W = p(null);
      m(
        function () {
          w &&
            (new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.ERROR_VIEW_IMPRESSION,
              bugReportingEntryPoint: a,
              clientServerJoinKey: i,
            }).commit(),
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ "Submission error occurred. Please try again.",
                ),
              }),
            ));
        },
        [a, i, w],
      );
      var q = s._(/*BTDS*/ "Send feedback"),
        U = function (t) {
          var e = t.text;
          (v(e), B(j(e)));
        },
        V = function (t) {
          var e = new Uint8Array(t);
          return btoa(String.fromCharCode.apply(String, Array.from(e)));
        },
        H = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.SUBMIT_CLICK,
              bugReportMediaCount: R.mediaFiles.length,
              bugReportingEntryPoint: a,
              clientServerJoinKey: i,
            }).commit();
            try {
              (N(!0), A(!1));
              var t = JSON.stringify(
                  yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    supportTag: "FeedbackSubmission",
                    convertFields: !0,
                    addUserAgentDetails: !0,
                  }),
                  null,
                  2,
                ),
                n = yield o("WAWebCrashlog").upload({
                  reason: o("WAWebCrashlog").USER_REPORT,
                  immediate: !1,
                  isHighPri: !0,
                  logType: o("WAWebCrashlog").LogType.SUPPORT,
                });
              if (
                (new (o(
                  "WAWebBugReportSessionWamEvent",
                ).BugReportSessionWamEvent)({
                  bugReportFlowAction:
                    n != null
                      ? o("WAWebWamEnumBugReportFlowAction")
                          .BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_SUCCESSFUL
                      : o("WAWebWamEnumBugReportFlowAction")
                          .BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_FAILED,
                  bugReportingEntryPoint: a,
                  clientServerJoinKey: i,
                }).commit(),
                o("WAWebABProps").getABPropConfigValue(
                  "bug_reporting_using_graphql",
                ))
              ) {
                var r = yield o(
                  "WAWebSupportBugReportSubmitMutation",
                ).submitBugReportGraphQL({
                  description: C,
                  debug_info_json: t,
                  device_log_handle: n,
                  title: "User Feedback",
                  category: null,
                  client_server_join_key: i,
                  media: R.mediaFiles.map(function (e) {
                    return {
                      cipher_key: V(e.encKey),
                      element_value: e.url,
                      iv: V(e.iv),
                      type:
                        e.mediaType ===
                        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
                          ? "VIDEO"
                          : "IMAGE",
                      file_name: e.filename,
                    };
                  }),
                });
                if (r.success === !0)
                  (new (o(
                    "WAWebBugReportSessionWamEvent",
                  ).BugReportSessionWamEvent)({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                      .BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
                    bugReportMediaCount: R.mediaFiles.length,
                    bugReportingEntryPoint: a,
                    clientServerJoinKey: i,
                  }).commit(),
                    d == null || d(C),
                    u());
                else {
                  var l;
                  (new (o(
                    "WAWebBugReportSessionWamEvent",
                  ).BugReportSessionWamEvent)({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                      .BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
                    bugReportMediaCount: R.mediaFiles.length,
                    bugReportErrorMessage:
                      (l = r.error_message) != null ? l : "unknown",
                    bugReportingEntryPoint: a,
                    clientServerJoinKey: i,
                  }).commit(),
                    A(!0),
                    N(!1));
                }
              } else {
                var s = yield o(
                  "WASmaxBugReportingReportBugRPC",
                ).sendReportBugRPC({
                  descriptionElementValue: C,
                  debugInformationJsonElementValue: t,
                  deviceLogHandleArgs:
                    n != null ? { deviceLogHandleElementValue: n } : void 0,
                  mediaArgs: R.mediaFiles.map(function (e) {
                    return {
                      mediaCipherKey: V(e.encKey),
                      mediaElementValue: e.url,
                      mediaIv: V(e.iv),
                      mediaType:
                        e.mediaType ===
                        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
                          ? "video"
                          : "image",
                    };
                  }),
                  titleArgs: { titleElementValue: "User Feedback" },
                  categoryArgs: void 0,
                  clientServerJoinKeyArgs: {
                    clientServerJoinKeyElementValue: i,
                  },
                });
                s.name === "ReportBugResponseSuccess"
                  ? (new (o(
                      "WAWebBugReportSessionWamEvent",
                    ).BugReportSessionWamEvent)({
                      bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                        .BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
                      bugReportMediaCount: R.mediaFiles.length,
                      bugReportingEntryPoint: a,
                      clientServerJoinKey: i,
                    }).commit(),
                    d == null || d(C),
                    u())
                  : (new (o(
                      "WAWebBugReportSessionWamEvent",
                    ).BugReportSessionWamEvent)({
                      bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                        .BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
                      bugReportMediaCount: R.mediaFiles.length,
                      bugReportErrorMessage: s.value.errorReportBugErrors.name,
                      bugReportingEntryPoint: a,
                      clientServerJoinKey: i,
                    }).commit(),
                    A(!0),
                    N(!1));
              }
            } catch (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "feedback submission failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("feedback-fail"),
                new (o(
                  "WAWebBugReportSessionWamEvent",
                ).BugReportSessionWamEvent)({
                  bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                    .BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
                  bugReportMediaCount: R.mediaFiles.length,
                  bugReportErrorMessage:
                    t instanceof Error ? t.message : "unknown",
                  bugReportingEntryPoint: a,
                  clientServerJoinKey: i,
                }).commit(),
                A(!0),
                N(!1));
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        G = function () {
          (new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
              .BUG_REPORT_FLOW_ACTION.CANCEL_CLICK,
            bugReportingEntryPoint: a,
            clientServerJoinKey: i,
          }).commit(),
            l == null || l(),
            o("WAWebModalManager").ModalManager.close());
        },
        z = s._(/*BTDS*/ "Describe the technical issue or suggestion..."),
        j = function (t) {
          return t == null ? !1 : t.trim().length >= g;
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: q,
        okText: s._(/*BTDS*/ "Send"),
        onOK: H,
        onCancel: G,
        okDisabled: !O || P || k,
        okSpinner: P,
        buttonGroupStyle: h.buttonGroup,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "send-feedback" },
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          children: [
            c.jsx(o("WAWebText.react").WAWebTextSmall, {
              marginBottom: 20,
              children: s._(
                /*BTDS*/ "For other issues like spam or scams, you can get help from the {help_center_link}, or {contact_us_link}.",
                [
                  s._param(
                    "help_center_link",
                    c.jsx(r("WAWebClickableLink.react"), {
                      onClick: T,
                      children: s._(/*BTDS*/ "Help Center"),
                    }),
                  ),
                  s._param(
                    "contact_us_link",
                    c.jsx(r("WAWebClickableLink.react"), {
                      onClick: D,
                      children: s._(/*BTDS*/ "contact us"),
                    }),
                  ),
                ],
              ),
            }),
            c.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              maxLength: f,
              onChange: U,
              inputPlaceholder: z,
              ariaLabel: z,
              ref: W,
              value: C,
              minVisibleLines: 3,
              maxVisibleLines: 7,
              multiline: !0,
              enterIsNewLine: !0,
              hideSpacer: !0,
              hideFloatingLabel: !0,
              theme: "gray-background",
              containerXstyle: h.feedbackField,
              contextMsg: O
                ? null
                : s._(
                    /*BTDS*/ "Describe with at least {FEEDBACK_MIN_DESC_LENGTH} characters",
                    [s._param("FEEDBACK_MIN_DESC_LENGTH", g)],
                  ),
            }),
            c.jsx(o("WAWebFlex.react").FlexItem, {
              marginBottom: 16,
              children: c.jsx(
                o("WAWebScreenshotUpload.react").WAWebScreenshotUpload,
                { mediaState: R, onChangeState: L, onUploadStateChange: I },
              ),
            }),
            c.jsxs(o("WAWebText.react").WAWebTextSmall, {
              children: [
                s._(
                  /*BTDS*/ "By sending, you allow WhatsApp to review related technical info to help address your feedback.",
                ),
                " ",
                c.jsx(r("WAWebClickableLink.react"), {
                  onClick: x,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          ],
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== e || n[1] !== t
        ? ((r = function () {
            new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.SUCCESS_VIEW_IMPRESSION,
              bugReportingEntryPoint: e,
              clientServerJoinKey: t,
            }).commit();
          }),
          (a = [e, t]),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        m(r, a));
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.bugReportingEntryPoint,
        a = e.clientServerJoinKey,
        i = e.onCancel;
      S(n, a);
      var l;
      t[0] !== i
        ? ((l = function () {
            i();
          }),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        d,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "send-feedback" }),
          (m = s._(/*BTDS*/ "Done")),
          (t[2] = d),
          (t[3] = m))
        : ((d = t[2]), (m = t[3]));
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx(o("WAWebFlex.react").FlexItem, {
            marginBottom: 16,
            align: "center",
            justify: "center",
            children: c.jsx(
              o("WAWebWdsPictoSucessCelebrationTickIcon.react")
                .WdsPictoSucessCelebrationTickIcon,
              { height: 88, width: 89 },
            ),
          })),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsx(o("WAWebFlex.react").FlexItem, {
            marginBottom: 24,
            xstyle: C.titleContainer,
            children: c.jsx(r("WAWebTextLineClamp.react"), {
              maxLines: 3,
              children: c.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                textAlign: "center",
                children: s._(/*BTDS*/ "Thanks for your feedback"),
              }),
            }),
          })),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            marginBottom: 16,
            children: c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: s._(
                /*BTDS*/ "It helps make WhatsApp better for everyone. While we don't share updates on your feedback, it tells us what to improve next.",
              ),
            }),
          })),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              p,
              _,
              f,
              c.jsx(o("WAWebFlex.react").FlexItem, {
                testid: void 0,
                children: c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  textAlign: "center",
                  children: s._(
                    /*BTDS*/ "Need more help? Visit the {help_center_link} or {contact_us_link}",
                    [
                      s._param(
                        "help_center_link",
                        c.jsx(r("WAWebClickableLink.react"), {
                          onClick: E,
                          children: "Help Center",
                        }),
                      ),
                      s._param(
                        "contact_us_link",
                        c.jsx(r("WAWebClickableLink.react"), {
                          onClick: L,
                          children: "contact us",
                        }),
                      ),
                    ],
                  ),
                }),
              }),
            ],
          })),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== u
          ? ((h = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              tsNavigationData: d,
              okText: m,
              onOK: u,
              children: g,
            })),
            (t[8] = u),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    function L() {
      (o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
        new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
          supportAiEventType: o("WAWebWamEnumSupportAiEventType")
            .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
        }).commit(),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(r("WAWebContactFormWrapper.react"), {}),
        ));
    }
    function E() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/",
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.bugReportingEntryPoint,
        r = e.onCancel,
        a = e.onSubmit,
        i = _(y.FORM),
        l = i[0],
        s = i[1],
        u = _(I),
        d = u[0],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            s(y.SUCCESS);
          }),
          (t[0] = m))
        : (m = t[0]);
      var p = m,
        f;
      t[1] !== r
        ? ((f = function () {
            (r == null || r(), o("WAWebModalManager").ModalManager.close());
          }),
          (t[1] = r),
          (t[2] = f))
        : (f = t[2]);
      var g = f;
      if (l === y.FORM) {
        var h;
        return (
          t[3] !== n || t[4] !== d || t[5] !== g || t[6] !== a
            ? ((h = c.jsx(v, {
                bugReportingEntryPoint: n,
                clientServerJoinKey: d,
                onCancel: g,
                onComplete: p,
                onSubmit: a,
              })),
              (t[3] = n),
              (t[4] = d),
              (t[5] = g),
              (t[6] = a),
              (t[7] = h))
            : (h = t[7]),
          h
        );
      }
      if (l === y.SUCCESS) {
        var C;
        return (
          t[8] !== n || t[9] !== d || t[10] !== g
            ? ((C = c.jsx(R, {
                bugReportingEntryPoint: n,
                clientServerJoinKey: d,
                onCancel: g,
              })),
              (t[8] = n),
              (t[9] = d),
              (t[10] = g),
              (t[11] = C))
            : (C = t[11]),
          C
        );
      }
      throw Error(
        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
          l,
      );
    }
    function I() {
      return o(
        "WAWebClientServerJoinKeyGenerator",
      ).generateClientServerJoinKey();
    }
    function T() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/",
      );
    }
    function D() {
      (o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
        new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
          supportAiEventType: o("WAWebWamEnumSupportAiEventType")
            .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
        }).commit(),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(r("WAWebContactFormWrapper.react"), {}),
        ));
    }
    function x() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/1040401477781770",
      );
    }
    l.default = k;
  },
  226,
);
