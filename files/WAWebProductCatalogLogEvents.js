__d(
  "WAWebProductCatalogLogEvents",
  [
    "WAWebBizCatalogUtils",
    "WAWebBizCatalogViewWamEvent",
    "WAWebCatalogBizWamEvent",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogEventUtils",
    "WAWebProductCatalogSession",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCatalogViewAction",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerWid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {},
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerWid: n,
            }),
            catalogOwnerJid: n.toJid(),
          },
        ),
      );
    }
    function s(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_CARD_ITEM_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          { catalogOwnerJid: n.catalogWid.toJid() },
        ),
      );
    }
    function u(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerWid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerWid: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_CARD_MORE_CLICK,
            catalogOwnerJid: n.toJid(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function c(e) {
      var t = e.cartToggle,
        n = e.catalogContext,
        r = e.catalogOwnerWid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerWid: r,
            }),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_LIST_IMPRESSION,
            catalogOwnerJid: r.toJid(),
            cartToggle: t,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(n),
        ),
      );
    }
    function d(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerWid,
        r = o("WAWebProductCatalogEventUtils").isCatalogOwner({
          catalogOwnerWid: n,
        });
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: r,
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
            catalogOwnerJid: n.toJid(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function m(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            catalogOwnerJid: n.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function p(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_DETAIL_IMAGE_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_DETAIL_IMAGE_CLICK,
            catalogOwnerJid: n.catalogWid.toJid(),
            productId: n.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function _(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            catalogOwnerJid: n.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_DETAIL_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_DETAIL_LINK_CLICK,
            productId: n.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function f(e) {
      var t = e.catalogSessionId,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
        catalogOwnerJid: n.catalogWid.toJid(),
        isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
          product: n,
        }),
        catalogSessionId: t,
      });
    }
    function g(e) {
      var t = e.catalogSessionId,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
        catalogOwnerJid: n.catalogWid.toJid(),
        isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
          product: n,
        }),
        catalogSessionId: t,
      });
    }
    function h(e) {
      var t = e.catalogSessionId,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
        catalogOwnerJid: n.catalogWid.toJid(),
        isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
          product: n,
        }),
        catalogSessionId: t,
      });
    }
    function y(e) {
      var t = e.catalogSessionId,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
        catalogOwnerJid: n.catalogWid.toJid(),
        isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
          product: n,
        }),
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_FULL_IMAGE_SWIPE,
        catalogViewAction: o("WAWebWamEnumCatalogViewAction")
          .CATALOG_VIEW_ACTION.ACTION_FULL_IMAGE_SWIPE,
        catalogSessionId: t,
        productId: n.id.toString(),
      });
    }
    function C(e) {
      var t = e.cartToggle,
        n = e.catalogContext,
        r = e.collectionId,
        a = e.product,
        i = o("WAWebBizCatalogUtils").getProductStatsInFetched(
          a.catalogWid.toString(),
          r,
          a,
        );
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            catalogOwnerJid: a.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: a,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_DETAIL_IMPRESSION,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_DETAIL_IMPRESSION,
            cartToggle: t,
          },
          i,
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(n),
        ),
      );
    }
    function b(e) {
      var t = e.catalogSessionId,
        n = e.product,
        r = e.reason;
      new (o("WAWebBizCatalogViewWamEvent").BizCatalogViewWamEvent)({
        catalogViewAction: o("WAWebWamEnumCatalogViewAction")
          .CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_SUCCESS,
        catalogSessionId: t,
        catalogOwnerJid: n.catalogWid.toJid(),
        catalogReportReasonCode: r,
        productId: n.id.toString(),
      }).commit();
    }
    function v(e) {
      var t = e.catalogSessionId,
        n = e.product,
        r = e.reason;
      new (o("WAWebBizCatalogViewWamEvent").BizCatalogViewWamEvent)({
        catalogViewAction: o("WAWebWamEnumCatalogViewAction")
          .CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_FAILURE,
        catalogOwnerJid: n.catalogWid.toJid(),
        catalogSessionId: t,
        catalogReportReasonCode: r,
        productId: n.id.toString(),
      }).commit();
    }
    function S(e) {
      var t = e.catalogContext,
        n = e.product,
        r = o("WAWebProductCatalogEventUtils").isCatalogOwner({ product: n });
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: r,
            catalogOwnerJid: n.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_QUOTED_PRODUCT_IN_CONVERSATION_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function R(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogOwnerJid: n.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_PRODUCT_IN_CONVERSATION_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function L(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
            catalogOwnerJid: n.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
            productId: n.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function E(e, t) {
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: e,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
            catalogOwnerJid: e.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
            productId: e.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function k(e, t) {
      var n,
        a = !1,
        i = "";
      (e.businessOwnerJid != null &&
        ((i = e.businessOwnerJid),
        (a = o("WAWebUserPrefsMeUser")
          .getMePnUserOrThrow_DO_NOT_USE()
          .equals(o("WAWebWidFactory").createWid(i)))),
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
          isOwner: a,
          catalogOwnerJid: i,
          catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
            .ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
          catalogViewAction: o("WAWebWamEnumCatalogViewAction")
            .CATALOG_VIEW_ACTION.ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
          productId:
            e == null || (n = e.productId) == null ? void 0 : n.toString(),
          catalogSessionId: r("isStringNullOrEmpty")(t)
            ? new (o(
                "WAWebProductCatalogSession",
              ).ProductCatalogSession)().toString()
            : t,
        }));
    }
    function I(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
            catalogOwnerJid: n.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
            productId: n.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function T(e) {
      var t = e.catalogContext,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              product: n,
            }),
            catalogOwnerJid: n.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
            productId: n.id.toString(),
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function D(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_CATALOG_IN_CONVERSATION_CLICK,
        catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint")
          .CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_ATTACHMENT_PANEL,
        catalogSessionId: e,
      });
      t.commit();
    }
    function x(e) {
      var t = e.catalogSessionId,
        n = e.product;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
        isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
          product: n,
        }),
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_SEND_PRODUCT_MESSAGE,
        catalogOwnerJid: n.catalogWid.toJid(),
        catalogViewAction: o("WAWebWamEnumCatalogViewAction")
          .CATALOG_VIEW_ACTION.ACTION_SEND_PRODUCT_MESSAGE,
        catalogSessionId: t,
        productId: n.id.toString(),
      });
    }
    function $(e) {
      var t = e.catalogSessionId,
        n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
          catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
            .ACTION_SEND_CATALOG_CLICK,
          catalogSessionId: t,
        });
      n.commit();
    }
    function P(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerWid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerWid: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK,
            catalogOwnerJid: n.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function N(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerWid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            catalogOwnerJid: n.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerWid: n,
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
        ),
      );
    }
    function M(e, t) {
      var n = { has_catalog: t },
        r = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
          catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
            .ACTION_PRODUCT_ADD_CLICKED,
          catalogSessionId: e.session.toString(),
          catalogEntryPoint: e.entryPoint,
          extraAttributes: JSON.stringify(n),
        });
      r.commit();
    }
    function w(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_ADD_SUCCESS,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      });
      t.commit();
    }
    function A(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_ADD_FAILED,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
        errorCode: t,
      });
      n.commit();
    }
    function F(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_EDIT_CLICKED,
        productId: e.id.toString(),
        catalogEntryPoint: t.entryPoint,
        catalogSessionId: t.session.toString(),
      });
      n.commit();
    }
    function O(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_EDIT_SUCCESS,
        catalogEntryPoint: t.entryPoint,
        productId: e.id.toString(),
        catalogSessionId: t.session.toString(),
      });
      n.commit();
    }
    function B(e, t, n) {
      var r = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_EDIT_FAILED,
        catalogEntryPoint: t.entryPoint,
        productId: e.id.toString(),
        errorCode: n,
        catalogSessionId: t.session.toString(),
      });
      r.commit();
    }
    function W(e, t, n) {
      var r = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_DELETE_CLICKED,
        catalogEntryPoint: n.entryPoint,
        productId: e.id.toString(),
        productCount: t,
        catalogSessionId: n.session.toString(),
      });
      r.commit();
    }
    function q(e, t, n) {
      var r = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_DELETE_SUCCESS,
        catalogEntryPoint: n.entryPoint,
        productId: e.id.toString(),
        productCount: t,
        catalogSessionId: n.session.toString(),
      });
      r.commit();
    }
    function U(e, t, n, r) {
      var a = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_DELETE_FAILED,
        catalogEntryPoint: n.entryPoint,
        productId: e.id.toString(),
        productCount: t,
        errorCode: r,
        catalogSessionId: n.session.toString(),
      });
      a.commit();
    }
    function V(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_ONBOARD_IMPRESSION,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      });
      t.commit();
    }
    function H(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_CREATE_PRODUCT_CATALOG,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      });
      t.commit();
    }
    function G(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_CREATE_PRODUCT_CATALOG_SUCCESS,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      });
      t.commit();
    }
    function z(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_CREATE_PRODUCT_CATALOG_FAILED,
        catalogEntryPoint: e.entryPoint,
        errorCode: t,
        catalogSessionId: e.session.toString(),
      });
      n.commit();
    }
    function j(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_APPEAL_PRODUCT_CLICKED,
        catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint")
          .CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
        catalogSessionId: e,
      });
      t.commit();
    }
    function K(e) {
      var t = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_APPEAL_PRODUCT_SUCCESS,
        catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint")
          .CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
        catalogSessionId: e,
      });
      t.commit();
    }
    function Q(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_APPEAL_PRODUCT_FAILED,
        catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint")
          .CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
        errorCode: t,
        catalogSessionId: e,
      });
      n.commit();
    }
    function X(e, t) {
      var n = new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_MENU_CLICK,
        catalogEntryPoint: t == null ? void 0 : t.entryPoint,
        catalogSessionId: t == null ? void 0 : t.session.toString(),
        productId: e,
      });
      n.commit();
    }
    function Y(e, t, n) {
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: e,
        catalogEntryPoint: n.entryPoint,
        catalogSessionId: n.session.toString(),
        productId: t,
      }).commit();
    }
    function J(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_HIDE_CLICKED,
        e,
        t,
      );
    }
    function Z(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_HIDE_SUCCESS,
        e,
        t,
      );
    }
    function ee(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_HIDE_CANCELLED,
        e,
        t,
      );
    }
    function te(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_HIDE_FAILED,
        e,
        t,
      );
    }
    function ne(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_UNHIDE_CLICKED,
        e,
        t,
      );
    }
    function re(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_UNHIDE_SUCCESS,
        e,
        t,
      );
    }
    function oe(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_UNHIDE_CANCELLED,
        e,
        t,
      );
    }
    function ae(e, t) {
      Y(
        o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_PRODUCT_UNHIDE_FAILED,
        e,
        t,
      );
    }
    ((l.logBusinessProfileCatalogView = e),
      (l.logProfileProductClick = s),
      (l.logCarouselViewMoreClick = u),
      (l.logCatalogListView = c),
      (l.logCatalogShareLinkClick = d),
      (l.logCatalogListDetailClick = m),
      (l.logDetailImageClick = p),
      (l.logDetailLinkClick = _),
      (l.logImageCarouselModalView = f),
      (l.logImageListClick = g),
      (l.logFullImageView = h),
      (l.logImageNavigate = y),
      (l.logProductDetailView = C),
      (l.logReportProductSuccess = b),
      (l.logReportProductFailure = v),
      (l.logProductInquiryClick = S),
      (l.logProductMsgClick = R),
      (l.logProductShareLinkClick = L),
      (l.logProductMessageBusinessClick = E),
      (l.logProductMessageBusinessSend = k),
      (l.logShareProductCopyLinkClick = I),
      (l.logShareProductViaWALinkClick = T),
      (l.logCatalogAttachmentButtonClick = D),
      (l.logProductMessageSent = x),
      (l.logSendCatalogClick = $),
      (l.logShareCatalogCopyLinkClick = P),
      (l.logShareCatalogViaWALinkClick = N),
      (l.logAddProductClick = M),
      (l.logAddProductSuccess = w),
      (l.logAddProductFailed = A),
      (l.logEditProductClick = F),
      (l.logEditProductSuccess = O),
      (l.logEditProductFailed = B),
      (l.logDeleteProductClick = W),
      (l.logDeleteProductSuccess = q),
      (l.logDeleteProductFailed = U),
      (l.logCatalogOnboardImpression = V),
      (l.logCreateProductCatalogClick = H),
      (l.logCreateProductCatalogSuccess = G),
      (l.logCreateProductCatalogFailed = z),
      (l.logAppealProductCatalogClick = j),
      (l.logAppealProductCatalogSuccess = K),
      (l.logAppealProductCatalogFailed = Q),
      (l.logCatalogContextMenuClick = X),
      (l.logCatalogProductHideClick = J),
      (l.logCatalogProductHideSuccess = Z),
      (l.logCatalogProductHideCancelled = ee),
      (l.logCatalogProductHideFailed = te),
      (l.logCatalogProductShowClick = ne),
      (l.logCatalogProductShowSuccess = re),
      (l.logCatalogProductShowCancelled = oe),
      (l.logCatalogProductShowFailed = ae));
  },
  98,
);
