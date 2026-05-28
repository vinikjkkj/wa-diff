__d(
  "isTrustedDestination",
  [
    "LinkshimHandlerConfig",
    "isBarcelonaURI",
    "isEnterpriseURI",
    "isFacebookURI",
    "isInstagramURI",
    "isInternalFBURI",
    "isInternalMetaURI",
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
      return /(^|\.)messenger\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function g() {
      return /(^|\.)threads\.(com|net)$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function h() {
      return /(^|\.)instagram\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function y() {
      return /(^|\.)whatsapp\.com$/.test(
        r("LinkshimHandlerConfig").current_domain,
      );
    }
    function C() {
      return /(^|\.)meta\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function b() {
      return /(^|\.)meta\.ai$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function v(e) {
      return /(^|\.)familycenter.*\.messenger\.com$/.test(e.getDomain());
    }
    function S(e) {
      return r("isFacebookURI")(e);
    }
    function R(e) {
      return r("isWorkplaceDotComURI")(e);
    }
    function L(t) {
      return r("LinkshimHandlerConfig").is_mobile_device === !0 &&
        r("isRoomsURI")(t)
        ? !0
        : s()
          ? R(t) || r("isMetaDotComURI")(t)
          : u()
            ? r("isMetaDotComURI")(t)
            : _()
              ? r("isInternalFBURI")(t) || r("isInternalMetaURI")(t) || S(t)
              : e()
                ? r("isOculusDotComURI")(t) ||
                  r("isSecureOculusDotComURI")(t) ||
                  r("isMetaDotComURI")(t)
                : g()
                  ? r("isBarcelonaURI")(t) || r("isMetaAIURI")(t)
                  : h()
                    ? r("isBarcelonaURI")(t) || r("isInstagramURI")(t)
                    : y()
                      ? r("isWhatsAppURI")(t)
                      : c()
                        ? S(t) || r("isInstagramURI")(t)
                        : d()
                          ? r("isEnterpriseURI")(t)
                          : m() || p()
                            ? r("isTrustedCMSContentURI")(t)
                            : C()
                              ? r("isMetaDotComURI")(t)
                              : b()
                                ? r("isMetaAIURI")(t) ||
                                  r("isInternalFBURI")(t) ||
                                  R(t) ||
                                  r("isMetaDotComURI")(t) ||
                                  r("isInstagramURI")(t) ||
                                  S(t) ||
                                  r("isWhatsAppURI")(t) ||
                                  r("isBarcelonaURI")(t) ||
                                  r("isOculusDotComURI")(t) ||
                                  r("isSecureOculusDotComURI")(t)
                                : f() && v(t)
                                  ? !0
                                  : S(t);
    }
    l.default = L;
  },
  98,
);
