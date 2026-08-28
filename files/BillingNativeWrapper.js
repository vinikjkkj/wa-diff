__d(
  "BillingNativeWrapper",
  ["BillingWizardRootUPLogger", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t, n) {
      var a = o("react-compiler-runtime").c(5),
        i,
        l;
      (a[0] !== t || a[1] !== e || a[2] !== n
        ? ((i = function () {
            var o = function (a) {
              var o =
                  window.webkit &&
                  window.webkit.messageHandlers &&
                  window.webkit.messageHandlers
                    .BillingWizardNativeWrapperiOSMessageHandler,
                i = window.BillingWizardNativeWrapperJSBridge;
              !e ||
                (!i && !o) ||
                (a.data === "on_hardware_back" &&
                  (t
                    ? n("onBack")
                    : (i && i.onAndroidNavigationReceived("on_close_wizard"),
                      n("onClose"))),
                a.data === "on_native_close_button" &&
                  i &&
                  r("BillingWizardRootUPLogger").logClickEvent("exit_button"));
            };
            return (
              window.addEventListener("message", o),
              function () {
                window.removeEventListener("message", o);
              }
            );
          }),
          (l = [t, n, e]),
          (a[0] = t),
          (a[1] = e),
          (a[2] = n),
          (a[3] = i),
          (a[4] = l))
        : ((i = a[3]), (l = a[4])),
        s(i, l));
    }
    function c(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== t || n[1] !== e
        ? ((r = function () {
            var n =
                window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers
                  .BillingWizardNativeWrapperiOSMessageHandler,
              r = window.BillingWizardNativeWrapperJSBridge;
            !e ||
              (!r && !n) ||
              (r
                ? r.onAndroidHeadlineReceived(t == null ? void 0 : t.toString())
                : n &&
                  n.postMessage({
                    headline: t == null ? void 0 : t.toString(),
                    messageType: "on_headline_changed",
                  }));
          }),
          (a = [t, e]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        s(r, a));
    }
    ((l.useListener = u), (l.useSyncHeadlineToNativeCode = c));
  },
  98,
);
