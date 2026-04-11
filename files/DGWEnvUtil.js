__d(
  "DGWEnvUtil",
  ["DGWConstants", "URI", "WebStorage", "cr:975"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t() {
          if ((e || (e = r("URI"))).isValidURI(window.location.href)) {
            var t = new (e || (e = r("URI")))(window.location.href),
              n = t.getDomain(),
              o = c(n, t.getPath()),
              a = o.authToken,
              i = o.authType,
              l = o.endpoint,
              s = new e().setDomain(l).setProtocol("wss").setPath("/ws");
            ((this.$2 = i), (this.$1 = s.toString()), (this.$3 = a));
          } else ((this.$1 = ""), (this.$2 = ""));
        }
        var n = t.prototype;
        return (
          (n.isDGWEnvCompatible = function () {
            return this.$1.length !== 0 && this.$2.length !== 0;
          }),
          (n.getDGWEndpoint = function () {
            return this.$1;
          }),
          (n.getDGWAuthType = function () {
            return this.$2;
          }),
          (n.getDGWVersion = function () {
            return o("DGWConstants").DgwVersion.DGWVER_BIG_IDS;
          }),
          (n.getDGWAuthToken = function () {
            return this.$3;
          }),
          t
        );
      })();
    function c(e, t) {
      if (e.includes("internalfb.com"))
        return { endpoint: "gateway.internalfb.com", authType: "INTERNALFB" };
      if (e.includes("workplace.com"))
        return { endpoint: "gateway.workplace.com", authType: "FACEBOOK" };
      if (e.includes("facebookenterprise.com"))
        return {
          endpoint: "gateway.facebookenterprise.com",
          authType: "ENTERPRISEFB",
        };
      if (e.includes("metaenterprise.com"))
        return {
          endpoint: "gateway.metaenterprise.com",
          authType: "ENTERPRISEFB",
        };
      if (e.includes("facebookrecruiting.com"))
        return {
          endpoint: "gateway.facebookrecruiting.com",
          authType: "RECRUITINGFB",
        };
      if (e.includes("metacareers.com"))
        return {
          endpoint: "gateway.metacareers.com",
          authType: "RECRUITINGFB",
        };
      if (e.includes("instagram.com"))
        return { endpoint: "gateway.instagram.com", authType: "INSTAGRAM" };
      if (e.includes("threads.com"))
        return { endpoint: "gateway.threads.com", authType: "INSTAGRAM" };
      if (e.includes("threads.net"))
        return { endpoint: "gateway.threads.net", authType: "INSTAGRAM" };
      if (e.includes("facebook.com")) {
        if (t === "/comet_ai/hts_chat") {
          var o,
            a =
              (o = (s || (s = r("WebStorage"))).getSessionStorage()) == null
                ? void 0
                : o.getItem("dgw_auth_token");
          if (a != null)
            return {
              endpoint: "gateway.facebook.com",
              authType: "GUEST",
              authToken: a,
            };
        }
        return { endpoint: "gateway.facebook.com", authType: "FACEBOOK" };
      }
      if (e.includes("messenger.com"))
        return { endpoint: "gateway.messenger.com", authType: "FACEBOOK" };
      if (e.includes("work.meta.com"))
        return { endpoint: "gateway.work.meta.com", authType: "FACEBOOK" };
      if (e.includes("devicemanager.meta.com"))
        return {
          endpoint: "gateway.devicemanager.meta.com",
          authType: "FACEBOOK",
        };
      if (e.includes("horizon.meta.com"))
        return {
          endpoint: "gateway.horizon.meta.com",
          authType: "HORIZON_WEB",
        };
      if (e.includes("spark.meta.com"))
        return { endpoint: "gateway.spark.meta.com", authType: "SPARK_WEB" };
      if (/^.*developer.*oculus.com.*$/.test(e))
        return { endpoint: "gateway.oculus.com", authType: "OCULUS" };
      if (e.includes("developers.meta.com"))
        return { endpoint: "gateway.developers.meta.com", authType: "OCULUS" };
      if (e.includes("meta.ai")) {
        var i = n("cr:975") == null ? void 0 : n("cr:975").accessToken,
          l = i != null && i.length > 0;
        return {
          authType: l ? "GUEST" : "ABRA",
          endpoint: "gateway.meta.ai",
          authToken: l ? i : void 0,
        };
      }
      return e.includes("facebook.net")
        ? { endpoint: "gateway.facebook.com", authType: "GUEST" }
        : e.includes("commercepartnerhub.com")
          ? { endpoint: "commercepartnerhub.com", authType: "GUEST" }
          : { endpoint: "", authType: "" };
    }
    var d = new u();
    l.default = d;
  },
  98,
);
