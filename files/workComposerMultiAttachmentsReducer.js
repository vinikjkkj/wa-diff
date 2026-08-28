__d(
  "workComposerMultiAttachmentsReducer",
  [
    "composerAttachmentAreaReducer",
    "getWorkGalahadChatAttachmentIcon",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["workMultiAttachments"];
    function s(e, t) {
      var n = t.urls,
        r = new Map(e);
      return (
        n.forEach(function (e) {
          r.set(e, { type: "APP_CONTENT", url: e });
        }),
        r
      );
    }
    function u(e, t) {
      var n = t.urls,
        r = new Map(e);
      return (
        n.forEach(function (e) {
          r.delete(e);
        }),
        r
      );
    }
    function c(e, t) {
      var n = t.shareScrapeData,
        r = t.url,
        o = new Map(e);
      return (
        o.has(r) &&
          o.set(r, { type: "APP_CONTENT", url: r, share_scrape_data: n }),
        o
      );
    }
    function d(e, t) {
      var n = t.files,
        o = new Map(e);
      return (
        n.forEach(function (e) {
          var t = r("uuidv4")();
          o.set(t, {
            id: t,
            type: "UPLOAD_FILE",
            file: e,
            name: e.name,
            icon: r("getWorkGalahadChatAttachmentIcon")(e.type),
          });
        }),
        o
      );
    }
    function m(e, t) {
      var n = t.id,
        r = new Map(e);
      return (r.delete(n), r);
    }
    function p(e, t) {
      var n = t.fileHandle,
        r = t.id,
        o = new Map(e),
        a = e.get(r);
      return (
        a != null &&
          a.type === "UPLOAD_FILE" &&
          o.set(r, babelHelpers.extends({ fileHandle: n }, a)),
        o
      );
    }
    function _(e, t) {
      switch (t.type) {
        case "ADD_APP_CONTENT_MULTI_ATTACHMENT":
          return s(e, t);
        case "REMOVE_APP_CONTENT_MULTI_ATTACHMENT":
          return u(e, t);
        case "SET_APP_CONTENT_LINK_PREVIEW":
          return c(e, t);
        case "ADD_UPLOAD_FILE_MULTI_ATTACHMENT":
          return d(e, t);
        case "REMOVE_UPLOAD_FILE_MULTI_ATTACHMENT":
          return m(e, t);
        case "SET_UPLOAD_FILE_HANDLE":
          return p(e, t);
        default:
          return e;
      }
    }
    function f(e, t) {
      switch (t.type) {
        case "SET_MULTI_ATTACHMENT_UPLOAD_BLOCKED":
          return t.isBlocked;
        case "ADD_APP_CONTENT_MULTI_ATTACHMENT":
        case "REMOVE_APP_CONTENT_MULTI_ATTACHMENT":
        case "ADD_UPLOAD_FILE_MULTI_ATTACHMENT":
        case "REMOVE_UPLOAD_FILE_MULTI_ATTACHMENT":
          return !1;
        default:
          return e;
      }
    }
    function g(e, t) {
      switch (t.type) {
        case "SET_MULTI_ATTACHMENT_ERROR_MSG":
          return t.errorMsg;
        case "ADD_APP_CONTENT_MULTI_ATTACHMENT":
        case "REMOVE_APP_CONTENT_MULTI_ATTACHMENT":
        case "ADD_UPLOAD_FILE_MULTI_ATTACHMENT":
        case "REMOVE_UPLOAD_FILE_MULTI_ATTACHMENT":
          return null;
        case "SET_APP_CONTENT_LINK_PREVIEW":
        case "SET_UPLOAD_FILE_HANDLE":
        default:
          return e;
      }
    }
    function h(e, t) {
      var n;
      switch (t.type) {
        case "ADD_APP_CONTENT_MULTI_ATTACHMENT":
        case "ADD_UPLOAD_FILE_MULTI_ATTACHMENT":
        case "SET_MULTI_ATTACHMENT_ERROR_MSG":
          return ((n = e.attachmentArea) == null
            ? void 0
            : n.activeAttachmentType) === "WORK_MULTI_ATTACHMENTS"
            ? e
            : o("composerAttachmentAreaReducer").composerAttachmentAreaReducer(
                e,
                {
                  attachmentType: "WORK_MULTI_ATTACHMENTS",
                  type: "ACTIVATE_ATTACHMENT_TYPE",
                },
              );
        default:
          return e;
      }
    }
    function y(t, n) {
      var r,
        o = t.workMultiAttachments,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return h(
        babelHelpers.extends(
          {
            workMultiAttachments: {
              errorMsg: g(o == null ? void 0 : o.errorMsg, n),
              uploadBlocked: f(o == null ? void 0 : o.uploadBlocked, n),
              attachments: _(
                (r = o == null ? void 0 : o.attachments) != null
                  ? r
                  : new Map(),
                n,
              ),
            },
          },
          a,
        ),
        n,
      );
    }
    l.default = y;
  },
  98,
);
