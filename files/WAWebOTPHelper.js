__d(
  "WAWebOTPHelper",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebCopyToClipboard",
    "WAWebMsgDataFromModel",
    "WAWebOTPLoggingHelper",
    "WAWebTemplateButtonSubtype",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      if (
        o("WAWebABProps").getABPropConfigValue("web_otp_copy_code_disabled") ||
        !navigator.clipboard
      )
        return !1;
      var t = e.url;
      if (
        e.subtype !==
          o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL ||
        t == null
      )
        return !1;
      try {
        var n = new URL(t);
        return m(n) != null;
      } catch (e) {
        return !1;
      }
    }
    function m(e) {
      var t;
      return (t = f(e)) != null ? t : g(e);
    }
    function p(e) {
      var t = e.url;
      if (
        e.subtype !==
          o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL ||
        t == null
      )
        return null;
      try {
        var n = new URL(t);
        return m(n);
      } catch (e) {
        return null;
      }
    }
    function _(t, n) {
      var r = t.url;
      if (
        !(
          t.subtype !==
            o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL ||
          r == null
        )
      ) {
        var a = new URL(r),
          i = m(a);
        i != null &&
          (o("WAWebCopyToClipboard")
            .copyTextToClipboard(i)
            .then(function (e) {
              e &&
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Code copied"),
                  }),
                );
            })
            .catch(function () {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[otp] failed to copy code",
                    ])),
                )
                .sendLogs("otp-copy-code-failed");
            }),
          o("WAWebOTPLoggingHelper").logOTPButtonClick(
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(n),
          ));
      }
    }
    function f(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "unified_otp_copy_code_url",
      );
      return e.toString().startsWith(t) ? e.toString().slice(t.length) : null;
    }
    function g(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "unified_otp_retriever_url",
      );
      if (!e.toString().startsWith(t)) return null;
      var n = e.searchParams,
        r = n.get("code");
      if (r == null) return null;
      var a = "otp";
      return r.startsWith(a) ? r.slice(a.length) : r;
    }
    ((l.isOTPCopyCodeButton = d),
      (l.getOTPCode = m),
      (l.getOTPCodeFromButton = p),
      (l.copyOTPCode = _));
  },
  226,
);
