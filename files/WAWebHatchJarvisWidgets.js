__d(
  "WAWebHatchJarvisWidgets",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^\/connectors\/connect\/([A-Za-z0-9_-]+)\/?$/,
      s = "agent.meta.ai",
      u = new Set(["building", "failed", "pending"]);
    function c(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function d(e) {
      var t = c(e);
      if (t == null) return null;
      try {
        var n = new URL(t).protocol;
        return n === "https:" || n === "http:" ? t : null;
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      return (e != null ? e : []).filter(function (e) {
        return e != null && typeof e == "object" && !Array.isArray(e);
      });
    }
    function p(e, t) {
      var n = c(o("WAWebHatchJsonReaders").readString(e, "type")),
        r =
          n === "connector" || n === "connector_reconnect"
            ? "CONNECT"
            : n === "connector_add_account"
              ? "ADD_ACCOUNT"
              : n === "connector_scope"
                ? "ADD_SCOPE"
                : null,
        a = o("WAWebHatchJsonReaders").readObject(e, "data"),
        i = c(o("WAWebHatchJsonReaders").readString(a, "connector_id")),
        l = c(o("WAWebHatchJsonReaders").readString(e, "title")),
        s = D(o("WAWebHatchJsonReaders").readString(a, "url"));
      return n == null || r == null || i == null || l == null || s == null
        ? null
        : {
            __typename: "GenAIMuseConnectorActionCardPrimitive",
            account_id: c(
              o("WAWebHatchJsonReaders").readString(a, "account_id"),
            ),
            action: r,
            action_url: s,
            card_id: t != null ? t : n + "/" + i,
            connector_id: i,
            image_url: D(o("WAWebHatchJsonReaders").readString(e, "image_url")),
            scope_key:
              r === "ADD_SCOPE"
                ? c(o("WAWebHatchJsonReaders").readString(a, "scope_key"))
                : null,
            subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: l,
          };
    }
    function _(e, t) {
      var n = e.linkUrl != null ? T(e.linkUrl) : null;
      return e.linkUrl == null || n == null || e.flight != null
        ? null
        : {
            __typename: "GenAIMuseConnectorActionCardPrimitive",
            action: "CONNECT",
            action_url: e.linkUrl,
            card_id: (t != null ? t : "list") + "/" + n,
            connector_id: n,
            image_url: e.imageUrl,
            subtitle: e.body,
            title: e.title,
          };
    }
    function f(e, t) {
      var n,
        r,
        a = c(o("WAWebHatchJsonReaders").readString(e, "title")),
        i = d(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(e, "data"),
            "url",
          ),
        );
      if (
        o("WAWebHatchJsonReaders").readString(e, "type") !==
          "credentials_vault" ||
        t == null ||
        a == null ||
        i == null
      )
        return null;
      var l = new URL(i);
      if (!l.pathname.endsWith("/browser-credentials")) return null;
      var s = new URLSearchParams(l.hash.replace(/^#/, "")),
        u = function (t) {
          return c(s.get(t));
        },
        m = d(u("page_url")),
        p = m != null ? new URL(m) : null;
      if (p == null || p.protocol !== "https:" || p.username !== "")
        return null;
      var _ = u("verification_code_label");
      return {
        __typename: "GenAISecureCredentialRequestPrimitive",
        capture_kind: _ != null ? "VERIFICATION_CODE" : "SIGN_IN",
        fields:
          _ != null
            ? [x("VERIFICATION_CODE", _, !0)]
            : [
                x("USERNAME", (n = u("username_label")) != null ? n : "", !1),
                x("PASSWORD", (r = u("password_label")) != null ? r : "", !0),
              ],
        host: p.hostname,
        page_url: m != null ? m : "",
        request_id: t,
        status: "PENDING",
        subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        title: a,
      };
    }
    function g(e) {
      var t,
        n,
        r,
        a,
        i =
          (t = c(o("WAWebHatchJsonReaders").readString(e, "display_name"))) !=
          null
            ? t
            : c(o("WAWebHatchJsonReaders").readString(e, "name"));
      if (i == null) return null;
      var l =
          (n = c(o("WAWebHatchJsonReaders").readString(e, "space_slug"))) !=
          null
            ? n
            : c(o("WAWebHatchJsonReaders").readString(e, "slug")),
        s = u.has(
          (r =
            (a = c(
              o("WAWebHatchJsonReaders").readString(e, "construction_status"),
            )) == null
              ? void 0
              : a.toLowerCase()) != null
            ? r
            : "",
        );
      return {
        __typename: "GenAISpaceCardPrimitive",
        artifact_ref: l != null ? l : i,
        can_open: l != null && !s,
        display_name: i,
        slug: l,
        source: "LOCAL",
        status: s ? "CONSTRUCTING" : "READY",
      };
    }
    function h(e) {
      var t,
        n,
        r = c(o("WAWebHatchJsonReaders").readString(e, "browser_task_id"));
      if (r == null) return null;
      var a = o("WAWebHatchJsonReaders").readObject(e, "current_site"),
        i = c(o("WAWebHatchJsonReaders").readString(e, "display_status")),
        l = c(o("WAWebHatchJsonReaders").readString(e, "status")),
        s = $(e, "version");
      return {
        __typename: "GenAIBrowserTaskPrimitive",
        activity_title: c(
          o("WAWebHatchJsonReaders").readString(e, "activity_title"),
        ),
        browser_task_id: r,
        current_site:
          a != null
            ? {
                __typename: "GenAIBrowserTaskSite",
                domain: c(o("WAWebHatchJsonReaders").readString(a, "domain")),
                page_title: c(
                  o("WAWebHatchJsonReaders").readString(a, "page_title"),
                ),
                url: d(o("WAWebHatchJsonReaders").readString(a, "url")),
              }
            : null,
        preview_available: P(e, "preview_available") === !0,
        state: E(l, i),
        status: l != null ? l : "",
        status_label: i,
        title:
          (t =
            (n = c(o("WAWebHatchJsonReaders").readString(e, "title"))) != null
              ? n
              : c(
                  o("WAWebHatchJsonReaders").readString(
                    o("WAWebHatchJsonReaders").readObject(e, "latest_tab"),
                    "title",
                  ),
                )) != null
            ? t
            : c(o("WAWebHatchJsonReaders").readString(a, "page_title")),
        version: s != null ? s : 0,
      };
    }
    function y(e) {
      return m(o("WAWebHatchJsonReaders").readArray(e, "products"))
        .map(function (e) {
          var t,
            n,
            r,
            a,
            i,
            l =
              (t = c(o("WAWebHatchJsonReaders").readString(e, "name"))) != null
                ? t
                : c(o("WAWebHatchJsonReaders").readString(e, "product_name")),
            s = d(o("WAWebHatchJsonReaders").readString(e, "url"));
          return l == null || s == null
            ? null
            : {
                __typename: "GenAIProductItemCardPrimitive",
                additional_images: [],
                brand:
                  (n = c(
                    o("WAWebHatchJsonReaders").readString(e, "retailer_name"),
                  )) != null
                    ? n
                    : c(o("WAWebHatchJsonReaders").readString(e, "merchant")),
                price:
                  (r = c(
                    o("WAWebHatchJsonReaders").readString(e, "sale_price"),
                  )) != null
                    ? r
                    : c(o("WAWebHatchJsonReaders").readString(e, "price")),
                product_id:
                  (a =
                    (i = c(
                      o("WAWebHatchJsonReaders").readString(e, "product_id"),
                    )) != null
                      ? i
                      : c(o("WAWebHatchJsonReaders").readString(e, "id"))) !=
                  null
                    ? a
                    : s,
                product_url: s,
                title: l,
              };
        })
        .filter(Boolean);
    }
    function C(e, t) {
      var n,
        r = d(o("WAWebHatchJsonReaders").readString(e, "url"));
      return r == null
        ? null
        : {
            description: c(
              o("WAWebHatchJsonReaders").readString(e, "description"),
            ),
            imageUrl: d(o("WAWebHatchJsonReaders").readString(e, "image_url")),
            siteName: c(o("WAWebHatchJsonReaders").readString(e, "site_name")),
            title:
              (n = c(o("WAWebHatchJsonReaders").readString(e, "title"))) != null
                ? n
                : I(t, r),
            url: r,
          };
    }
    function b(e) {
      var t = m(o("WAWebHatchJsonReaders").readArray(e, "items"))
        .map(S)
        .filter(Boolean);
      return t.length === 0
        ? null
        : {
            rows: t,
            subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: c(o("WAWebHatchJsonReaders").readString(e, "title")),
          };
    }
    function v(e) {
      return e
        .map(function (e) {
          var t = c(o("WAWebHatchJsonReaders").readString(e, "label"));
          return t != null
            ? {
                isDisabled: P(e, "disabled") === !0,
                label: t,
                url: d(o("WAWebHatchJsonReaders").readString(e, "url")),
              }
            : null;
        })
        .filter(Boolean);
    }
    function S(e) {
      var t = c(o("WAWebHatchJsonReaders").readString(e, "title"));
      if (t == null) return null;
      var n = o("WAWebHatchJsonReaders").readString(e, "type"),
        r = o("WAWebHatchJsonReaders").readObject(e, "data");
      return {
        body: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        flight:
          n === "flight"
            ? R(o("WAWebHatchJsonReaders").readObject(r, "flight_data"))
            : null,
        imageUrl: d(o("WAWebHatchJsonReaders").readString(e, "image_url")),
        linkUrl:
          n === "link"
            ? d(o("WAWebHatchJsonReaders").readString(r, "url"))
            : null,
        metaText: c(o("WAWebHatchJsonReaders").readString(e, "tertiary_title")),
        title: t,
      };
    }
    function R(e) {
      if (e == null) return null;
      var t = o("WAWebHatchJsonReaders").readObject(e, "bags");
      return {
        airline: c(o("WAWebHatchJsonReaders").readString(e, "airline")),
        bookingMessage: c(
          o("WAWebHatchJsonReaders").readString(e, "response_message"),
        ),
        bookingTitle: c(o("WAWebHatchJsonReaders").readString(e, "cta_text")),
        carryOnBags: $(t, "carry_on"),
        checkedBags: $(t, "checked"),
        detailsUrl: d(o("WAWebHatchJsonReaders").readString(e, "flight_link")),
        isChangeable: L(o("WAWebHatchJsonReaders").readString(e, "changeable")),
        isRefundable: L(o("WAWebHatchJsonReaders").readString(e, "refundable")),
        legs: m(o("WAWebHatchJsonReaders").readArray(e, "slices")).map(
          function (e) {
            var t;
            return {
              arriveTime: c(
                (t = o("WAWebHatchJsonReaders")).readString(
                  t.readObject(e, "arrive"),
                  "short_timestamp_string",
                ),
              ),
              cabin: c(t.readString(e, "cabin")),
              departTime: c(
                t.readString(
                  t.readObject(e, "depart"),
                  "short_timestamp_string",
                ),
              ),
              duration: c(t.readString(e, "duration")),
              from: c(t.readString(e, "from")),
              stops: $(e, "stops"),
              to: c(t.readString(e, "to")),
            };
          },
        ),
        price: c(o("WAWebHatchJsonReaders").readString(e, "price")),
      };
    }
    function L(e) {
      return e === "yes" ? !0 : e === "no" ? !1 : null;
    }
    function E(e, t) {
      var n = k(t);
      return n === "starting"
        ? "STARTING"
        : (function (e) {
            return e === "queued"
              ? "QUEUED"
              : e === "starting"
                ? "STARTING"
                : e === "awaiting_user_input"
                  ? "WAITING"
                  : e === "needs_user"
                    ? "NEEDS_USER"
                    : e === "user_controlled"
                      ? "PAUSED"
                      : e === "completed"
                        ? "COMPLETED"
                        : e === "failed"
                          ? "FAILED"
                          : e === "superseded"
                            ? n === "needs_you"
                              ? "NEEDS_USER"
                              : "STOPPED"
                            : "WORKING";
          })(k(e));
    }
    function k(e) {
      return (e != null ? e : "").toLowerCase().replace(/[- ]/g, "_");
    }
    function I(e, t) {
      var n = e.trim(),
        r = "](" + t + ")";
      if (!n.startsWith("[") || !n.endsWith(r)) return null;
      var o = n.slice(1, -r.length).trim();
      return o === "" || o === t || o.includes("](") ? null : o;
    }
    function T(t) {
      var n,
        r,
        o = new URL(t);
      return o.protocol === "https:" &&
        o.hostname === s &&
        (n = (r = e.exec(o.pathname)) == null ? void 0 : r[1]) != null
        ? n
        : null;
    }
    function D(e) {
      var t = d(e);
      return t != null && t.startsWith("https:") ? t : null;
    }
    function x(e, t, n) {
      return {
        __typename: "GenAISecureCredentialField",
        is_secret: n,
        label: t,
        name: e,
      };
    }
    function $(e, t) {
      var n = N(e, t);
      return typeof n == "number" ? n : null;
    }
    function P(e, t) {
      var n = N(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function N(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    ((l.text = c),
      (l.webUrl = d),
      (l.objects = m),
      (l.connectorCard = p),
      (l.connectorCardForRow = _),
      (l.secureCredential = f),
      (l.spaceCard = g),
      (l.browserTask = h),
      (l.productCards = y),
      (l.linkCard = C),
      (l.list = b),
      (l.actionButtons = v));
  },
  98,
);
