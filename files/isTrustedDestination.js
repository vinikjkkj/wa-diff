__d(
  "isTrustedDestination",
  [
    "LinkshimHandlerConfig",
    "isBarcelonaURI",
    "isEnterpriseURI",
    "isFacebookURI",
    "isInstagramURI",
    "isInternalFBURI",
    "isMetaAIURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isRoomsURI",
    "isSecureOculusDotComURI",
    "isTrustedCMSContentURI",
    "isWhatsAppURI",
    "isWorkplaceDotComURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return /(^|\.)oculus\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function s() {
      return /(^|\.)workplace\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function u() {
      return /(^|\.)\.workrooms\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function c() {
      return /(^|\.)accountscenter\.meta\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function d() {
      return /(^|\.)(facebook|meta)enterprise\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function m() {
      return /(^|\.)www\.meta\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function p() {
      return /(^|\.)about\.meta\.com$|^about(\..+)?\.facebook\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function _() {
      return /(^|\.)internalfb\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function f() {
      return /(^|\.)threads\.(com|net)$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function g() {
      return /(^|\.)instagram\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function h() {
      return /(^|\.)whatsapp\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function y() {
      return /(^|\.)meta\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function C() {
      return /(^|\.)meta\.ai$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function b(e) {
      return r("isFacebookURI")(e);
    }
    function v(e) {
      return r("isWorkplaceDotComURI")(e);
    }
    function S(t) {
      return r("LinkshimHandlerConfig").is_mobile_device === !0 &&
        r("isRoomsURI")(t)
        ? !0
        : s()
          ? v(t) || r("isMetaDotComURI")(t)
          : u()
            ? r("isMetaDotComURI")(t)
            : _()
              ? r("isInternalFBURI")(t) || b(t)
              : e()
                ? r("isOculusDotComURI")(t) ||
                  r("isSecureOculusDotComURI")(t) ||
                  r("isMetaDotComURI")(t)
                : f()
                  ? r("isBarcelonaURI")(t) || r("isMetaAIURI")(t)
                  : g()
                    ? r("isBarcelonaURI")(t) || r("isInstagramURI")(t)
                    : h()
                      ? r("isWhatsAppURI")(t)
                      : c()
                        ? b(t) || r("isInstagramURI")(t)
                        : d()
                          ? r("isEnterpriseURI")(t)
                          : m() || p()
                            ? r("isTrustedCMSContentURI")(t)
                            : y()
                              ? r("isMetaDotComURI")(t)
                              : C()
                                ? r("isMetaAIURI")(t) ||
                                  r("isInternalFBURI")(t) ||
                                  v(t) ||
                                  r("isMetaDotComURI")(t) ||
                                  r("isInstagramURI")(t) ||
                                  b(t) ||
                                  r("isWhatsAppURI")(t) ||
                                  r("isBarcelonaURI")(t) ||
                                  r("isOculusDotComURI")(t) ||
                                  r("isSecureOculusDotComURI")(t)
                                : b(t);
    }
    l.default = S;
  },
  98,
);
