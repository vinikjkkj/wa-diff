__d(
  "AdsPageUtils",
  ["AdsEditorConfig", "AdsPagePostUtils", "PageAdminTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      r("PageAdminTypes").MANAGER,
      r("PageAdminTypes").CONTENT_CREATOR,
    ]);
    function s(e) {
      return u(e == null ? void 0 : e.creative);
    }
    function u(e) {
      var t;
      return (
        (e == null || (t = e.object_story_spec) == null ? void 0 : t.page_id) ||
        o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(
          e == null ? void 0 : e.object_story_id,
        ) ||
        (e == null ? void 0 : e.object_id)
      );
    }
    function c(e) {
      return e.filter(function (e) {
        return d(e) || p(e);
      });
    }
    function d(e) {
      var t;
      return (
        ((t = e.locations) == null || (t = t.summary) == null
          ? void 0
          : t.total_count) > 0
      );
    }
    function m(e) {
      var t = e.location;
      return !!t && !!t.latitude && !!t.longitude;
    }
    function p(e) {
      var t, n;
      return (
        ((t =
          (n = e.shared_location_structures) == null || (n = n.data) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function _(e) {
      var t,
        n = (t = e.shared_location_structures) == null ? void 0 : t.data;
      return n && n.length > 0
        ? n.map(function (e) {
            return e.id;
          })
        : [];
    }
    function f(e, t) {
      var n = e.business && e.business.id === t,
        r = h(e).some(function (e) {
          return e.business && e.business.id === t;
        });
      return !!(n || r);
    }
    function g(e) {
      var t = e.business && e.business.id,
        n = h(e).length > 0;
      return !!(t || n);
    }
    function h(e) {
      var t;
      return ((t = e.businessprojects) == null ? void 0 : t.data) || [];
    }
    function y(e, t, n) {
      var r = t
        ? function (e) {
            return f(e, t);
          }
        : function (e) {
            return !g(e);
          };
      return e.filter(function (e) {
        return r(e) || (n && n.has(e.id));
      });
    }
    function C(e) {
      return (
        e &&
        (e.name_with_location_descriptor ||
          e.global_brand_page_name ||
          e.name ||
          e.id)
      );
    }
    function b(e) {
      var t,
        n = e.picture;
      return typeof n == "string"
        ? n
        : (t = e.picture) == null
          ? void 0
          : t.data.url;
    }
    function v(e) {
      return e == null ? void 0 : e.link;
    }
    function S(t) {
      return L(t, e);
    }
    function R(e) {
      return L(e, new Set([r("PageAdminTypes").MANAGER]));
    }
    function L(e, t) {
      var n;
      if (r("AdsEditorConfig").empl_show_all_pages) return !0;
      var o = ((n = e.userpermissions) == null ? void 0 : n.data) || [];
      return o.some(function (e) {
        return t.has(e.role);
      });
    }
    function E(e) {
      return e.has_whatsapp_number || !1;
    }
    function k(e, t) {
      t === void 0 && (t = !1);
      var n = e == null ? void 0 : e.whatsapp_numbers_info;
      if (n)
        return n.some(function (e) {
          return e.is_business_number;
        });
      if (t) {
        var r = e == null ? void 0 : e.whatsapp_number_type;
        if (r === "BIZ" || r === "ENTERPRISE") return !0;
      }
      return !1;
    }
    function I(e) {
      var t;
      return (t =
        e == null ? void 0 : e.has_whatsapp_number_in_location_structure) !=
        null
        ? t
        : !1;
    }
    function T(e, t) {
      var n = e.whatsapp_number;
      return !t || !n ? n : n.replace(/\+/g, "");
    }
    function D(e) {
      return e.whatsapp_number_formatted;
    }
    function x(e) {
      return e.whatsapp_numbers_info;
    }
    function $(e) {
      return e.page_whatsapp_number_id;
    }
    function P(e) {
      return e.can_manage_page_whatsapp;
    }
    function N(e) {
      return e.whatsapp_smb_device;
    }
    ((l.getPageID = s),
      (l.getPageIDFromCreativeField = u),
      (l.getParentPages = c),
      (l.hasLocations = d),
      (l.hasLocation = m),
      (l.hasSharedLocationStructures = p),
      (l.getSharedParentPageIDs = _),
      (l.isPageForBusiness = f),
      (l.isBusinessPage = g),
      (l.getBusinessProjects = h),
      (l.filterForBusinessUsage = y),
      (l.getPageUIName = C),
      (l.getPageIconURI = b),
      (l.getPageLink = v),
      (l.canCreatePostsForPage = S),
      (l.isAdmin = R),
      (l.hasPermission = L),
      (l.hasWhatsAppNumber = E),
      (l.hasWhatsAppBusinessNumber = k),
      (l.hasWhatsAppNumberInLocationStructure = I),
      (l.getWhatsAppNumber = T),
      (l.getWhatsAppNumberFormatted = D),
      (l.getWhatsAppNumbersInfo = x),
      (l.getPageWhatsAppNumberID = $),
      (l.getCanManagePageWhatsApp = P),
      (l.getWhatsAppSmbDevice = N));
  },
  98,
);
