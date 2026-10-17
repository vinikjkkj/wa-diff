__d(
  "WAWebHatchJarvisWidgets",
  [
    "WAWebHatchBrowserTask",
    "WAWebHatchJarvisMedia",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["building", "failed", "pending"]);
    function s(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function u(e, t) {
      var n = s(o("WAWebHatchJsonReaders").readString(e, "type")),
        r =
          n === "connector" || n === "connector_reconnect"
            ? "CONNECT"
            : n === "connector_add_account"
              ? "ADD_ACCOUNT"
              : n === "connector_scope"
                ? "ADD_SCOPE"
                : null,
        a = o("WAWebHatchJsonReaders").readObject(e, "data"),
        i = s(o("WAWebHatchJsonReaders").readString(a, "connector_id")),
        l = s(o("WAWebHatchJsonReaders").readString(e, "title")),
        u = o("WAWebHatchUrl").toHttpsUrl(
          o("WAWebHatchJsonReaders").readString(a, "url"),
        );
      return n == null || r == null || i == null || l == null || u == null
        ? null
        : {
            __typename: "GenAIMuseConnectorActionCardPrimitive",
            account_id: s(
              o("WAWebHatchJsonReaders").readString(a, "account_id"),
            ),
            action: r,
            action_url: u,
            card_id: t != null ? t : n + "/" + i,
            connector_id: i,
            image_url: o("WAWebHatchUrl").toHttpsUrl(
              o("WAWebHatchJsonReaders").readString(e, "image_url"),
            ),
            scope_key:
              r === "ADD_SCOPE"
                ? s(o("WAWebHatchJsonReaders").readString(a, "scope_key"))
                : null,
            subtitle: s(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: l,
          };
    }
    function c(e, t) {
      var n = o("WAWebHatchUrl").getHatchConnectLinkConnectorId(e.linkUrl);
      return e.linkUrl == null || n == null || e.flight != null
        ? null
        : {
            __typename: "GenAIMuseConnectorActionCardPrimitive",
            action: "CONNECT",
            action_url: e.linkUrl,
            card_id: (t != null ? t : "list") + "/" + n,
            connector_id: n,
            image_url: o("WAWebHatchUrl").toWebUrl(e.imageUrl),
            subtitle: e.body,
            title: e.title,
          };
    }
    function d(e, t) {
      var n,
        r,
        a = s(o("WAWebHatchJsonReaders").readString(e, "title")),
        i = o(
          "WAWebHatchSecureCredentialDecoder",
        ).readHatchSecureCredentialCaptureLink(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(e, "data"),
            "url",
          ),
        ),
        l = function (t) {
          return s(i == null ? void 0 : i.get(t));
        },
        u = o("WAWebHatchUrl").toHttpsUrl(l("page_url"));
      if (
        o("WAWebHatchJsonReaders").readString(e, "type") !==
          "credentials_vault" ||
        t == null ||
        a == null ||
        u == null
      )
        return null;
      var c = new URL(u),
        d = l("verification_code_label");
      return {
        __typename: "GenAISecureCredentialRequestPrimitive",
        capture_kind: d != null ? "VERIFICATION_CODE" : "SIGN_IN",
        fields:
          d != null
            ? [E("VERIFICATION_CODE", d, !0)]
            : [
                E("USERNAME", (n = l("username_label")) != null ? n : "", !1),
                E("PASSWORD", (r = l("password_label")) != null ? r : "", !0),
              ],
        host: c.hostname,
        page_url: u,
        request_id: t,
        status: "PENDING",
        subtitle: s(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        title: a,
      };
    }
    function m(t) {
      var n,
        r,
        a,
        i,
        l =
          (n = s(o("WAWebHatchJsonReaders").readString(t, "display_name"))) !=
          null
            ? n
            : s(o("WAWebHatchJsonReaders").readString(t, "name"));
      if (l == null) return null;
      var u =
          (r = s(o("WAWebHatchJsonReaders").readString(t, "space_slug"))) !=
          null
            ? r
            : s(o("WAWebHatchJsonReaders").readString(t, "slug")),
        c = e.has(
          (a =
            (i = s(
              o("WAWebHatchJsonReaders").readString(t, "construction_status"),
            )) == null
              ? void 0
              : i.toLowerCase()) != null
            ? a
            : "",
        );
      return {
        __typename: "GenAISpaceCardPrimitive",
        artifact_ref: u != null ? u : l,
        can_open: u != null && !c,
        display_name: l,
        slug: u,
        source: "LOCAL",
        status: c ? "CONSTRUCTING" : "READY",
      };
    }
    function p(e) {
      var t,
        n,
        r,
        a = o("WAWebHatchBrowserTask").decodeHatchBrowserTask(e),
        i = s(a == null ? void 0 : a.browserTaskID);
      if (a == null || i == null) return null;
      var l = o("WAWebHatchJsonReaders").readObject(e, "current_site"),
        u = s(a.displayStatus),
        c = s(a.status);
      return {
        __typename: "GenAIBrowserTaskPrimitive",
        activity_title: s(a.activityTitle),
        browser_task_id: i,
        current_site:
          l != null
            ? {
                __typename: "GenAIBrowserTaskSite",
                domain: s(a.siteDomain),
                page_title: s(a.pageTitle),
                url: o("WAWebHatchUrl").toWebUrl(
                  o("WAWebHatchJsonReaders").readString(l, "url"),
                ),
              }
            : null,
        preview_available: a.previewAvailable === !0,
        state: S(c, u),
        status: c != null ? c : "",
        status_label: u,
        title:
          (t =
            (n = s(a.title)) != null
              ? n
              : s(
                  o("WAWebHatchJsonReaders").readString(
                    o("WAWebHatchJsonReaders").readObject(e, "latest_tab"),
                    "title",
                  ),
                )) != null
            ? t
            : s(a.pageTitle),
        version: (r = a.version) != null ? r : 0,
      };
    }
    function _(e) {
      return o("WAWebHatchJsonReaders")
        .readObjects(e, "products")
        .map(function (e) {
          var t,
            n,
            r,
            a,
            i,
            l =
              (t = s(o("WAWebHatchJsonReaders").readString(e, "name"))) != null
                ? t
                : s(o("WAWebHatchJsonReaders").readString(e, "product_name")),
            u = o("WAWebHatchUrl").toWebUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
            );
          return l == null || u == null
            ? null
            : {
                __typename: "GenAIProductItemCardPrimitive",
                additional_images: [],
                brand:
                  (n = s(
                    o("WAWebHatchJsonReaders").readString(e, "retailer_name"),
                  )) != null
                    ? n
                    : s(o("WAWebHatchJsonReaders").readString(e, "merchant")),
                price:
                  (r = s(
                    o("WAWebHatchJsonReaders").readString(e, "sale_price"),
                  )) != null
                    ? r
                    : s(o("WAWebHatchJsonReaders").readString(e, "price")),
                product_id:
                  (a =
                    (i = s(
                      o("WAWebHatchJsonReaders").readString(e, "product_id"),
                    )) != null
                      ? i
                      : s(o("WAWebHatchJsonReaders").readString(e, "id"))) !=
                  null
                    ? a
                    : u,
                product_url: u,
                title: l,
              };
        })
        .filter(Boolean);
    }
    function f(e, t) {
      var n,
        r = o("WAWebHatchUrl").toWebUrl(
          o("WAWebHatchJsonReaders").readString(e, "url"),
        );
      return r == null
        ? null
        : {
            description: s(
              o("WAWebHatchJsonReaders").readString(e, "description"),
            ),
            imageUrl: C(o("WAWebHatchJsonReaders").readString(e, "image_url")),
            siteName: s(o("WAWebHatchJsonReaders").readString(e, "site_name")),
            title:
              (n = s(o("WAWebHatchJsonReaders").readString(e, "title"))) != null
                ? n
                : L(t, r),
            url: r,
          };
    }
    function g(e) {
      var t = o("WAWebHatchJsonReaders")
        .readObjects(e, "items")
        .map(y)
        .filter(Boolean);
      return t.length === 0
        ? null
        : {
            rows: t,
            subtitle: s(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: s(o("WAWebHatchJsonReaders").readString(e, "title")),
          };
    }
    function h(e) {
      return e
        .map(function (e) {
          var t = s(o("WAWebHatchJsonReaders").readString(e, "label"));
          return t != null
            ? {
                isDisabled:
                  o("WAWebHatchJsonReaders").readBool(e, "disabled") === !0,
                label: t,
                url: o("WAWebHatchUrl").toWebUrl(
                  o("WAWebHatchJsonReaders").readString(e, "url"),
                ),
              }
            : null;
        })
        .filter(Boolean);
    }
    function y(e) {
      var t = s(o("WAWebHatchJsonReaders").readString(e, "title"));
      if (t == null) return null;
      var n = o("WAWebHatchJsonReaders").readString(e, "type"),
        r = o("WAWebHatchJsonReaders").readObject(e, "data");
      return {
        body: s(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        flight:
          n === "flight"
            ? b(o("WAWebHatchJsonReaders").readObject(r, "flight_data"))
            : null,
        imageUrl: C(o("WAWebHatchJsonReaders").readString(e, "image_url")),
        linkUrl:
          n === "link"
            ? o("WAWebHatchUrl").toWebUrl(
                o("WAWebHatchJsonReaders").readString(r, "url"),
              )
            : null,
        metaText: s(o("WAWebHatchJsonReaders").readString(e, "tertiary_title")),
        title: t,
      };
    }
    function C(e) {
      return e != null && o("WAWebHatchJarvisMedia").isHatchJarvisMediaUrl(e)
        ? e
        : o("WAWebHatchUrl").toWebUrl(e);
    }
    function b(e) {
      if (e == null) return null;
      var t = o("WAWebHatchJsonReaders").readObject(e, "bags");
      return {
        airline: s(o("WAWebHatchJsonReaders").readString(e, "airline")),
        bookingMessage: s(
          o("WAWebHatchJsonReaders").readString(e, "response_message"),
        ),
        bookingTitle: s(o("WAWebHatchJsonReaders").readString(e, "cta_text")),
        carryOnBags: o("WAWebHatchJsonReaders").readNumber(t, "carry_on"),
        checkedBags: o("WAWebHatchJsonReaders").readNumber(t, "checked"),
        detailsUrl: o("WAWebHatchUrl").toWebUrl(
          o("WAWebHatchJsonReaders").readString(e, "flight_link"),
        ),
        isChangeable: v(o("WAWebHatchJsonReaders").readString(e, "changeable")),
        isRefundable: v(o("WAWebHatchJsonReaders").readString(e, "refundable")),
        legs: o("WAWebHatchJsonReaders")
          .readObjects(e, "slices")
          .map(function (e) {
            var t;
            return {
              arriveTime: s(
                (t = o("WAWebHatchJsonReaders")).readString(
                  t.readObject(e, "arrive"),
                  "short_timestamp_string",
                ),
              ),
              cabin: s(t.readString(e, "cabin")),
              departTime: s(
                t.readString(
                  t.readObject(e, "depart"),
                  "short_timestamp_string",
                ),
              ),
              duration: s(t.readString(e, "duration")),
              from: s(t.readString(e, "from")),
              stops: t.readNumber(e, "stops"),
              to: s(t.readString(e, "to")),
            };
          }),
        price: s(o("WAWebHatchJsonReaders").readString(e, "price")),
      };
    }
    function v(e) {
      return e === "yes" ? !0 : e === "no" ? !1 : null;
    }
    function S(e, t) {
      var n = R(t);
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
          })(R(e));
    }
    function R(e) {
      return (e != null ? e : "").toLowerCase().replace(/[- ]/g, "_");
    }
    function L(e, t) {
      var n = e.trim(),
        r = "](" + t + ")";
      if (!n.startsWith("[") || !n.endsWith(r)) return null;
      var o = n.slice(1, -r.length).trim();
      return o === "" || o === t || o.includes("](") ? null : o;
    }
    function E(e, t, n) {
      return {
        __typename: "GenAISecureCredentialField",
        is_secret: n,
        label: t,
        name: e,
      };
    }
    ((l.text = s),
      (l.connectorCard = u),
      (l.connectorCardForRow = c),
      (l.secureCredential = d),
      (l.spaceCard = m),
      (l.browserTask = p),
      (l.productCards = _),
      (l.linkCard = f),
      (l.list = g),
      (l.actionButtons = h));
  },
  98,
);
