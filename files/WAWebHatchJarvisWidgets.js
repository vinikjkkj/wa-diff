__d(
  "WAWebHatchJarvisWidgets",
  [
    "WALinkify",
    "WAWebHatchApiKeyGating",
    "WAWebHatchBrowserTask",
    "WAWebHatchJarvisMedia",
    "WAWebHatchJsonReaders",
    "WAWebHatchPeerInviteUrl",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["building", "failed", "pending"]),
      s = 1,
      u = "share";
    function c(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function d(e, t) {
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
        s = o("WAWebHatchUrl").toHttpsUrl(
          o("WAWebHatchJsonReaders").readString(a, "url"),
        );
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
            image_url: o("WAWebHatchUrl").toHttpsUrl(
              o("WAWebHatchJsonReaders").readString(e, "image_url"),
            ),
            scope_key:
              r === "ADD_SCOPE"
                ? c(o("WAWebHatchJsonReaders").readString(a, "scope_key"))
                : null,
            subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: l,
          };
    }
    function m(e, t) {
      var n = o("WAWebHatchUrl").getHatchConnectLinkConnectorId(e.linkUrl);
      return e.linkUrl == null ||
        n == null ||
        e.flight != null ||
        (o("WAWebHatchUrl").isHatchApiKeyConnectLink(e.linkUrl) &&
          !o("WAWebHatchApiKeyGating").isHatchApiKeyConnectEnabled())
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
    function p(e, t) {
      var n,
        r,
        a = c(o("WAWebHatchJsonReaders").readString(e, "title")),
        i = o(
          "WAWebHatchSecureCredentialDecoder",
        ).readHatchSecureCredentialCaptureLink(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(e, "data"),
            "url",
          ),
        ),
        l = function (t) {
          return c(i == null ? void 0 : i.get(t));
        },
        s = o("WAWebHatchUrl").toHttpsUrl(l("page_url"));
      if (
        o("WAWebHatchJsonReaders").readString(e, "type") !==
          "credentials_vault" ||
        t == null ||
        a == null ||
        s == null
      )
        return null;
      var u = new URL(s),
        d = l("verification_code_label");
      return {
        __typename: "GenAISecureCredentialRequestPrimitive",
        capture_kind: d != null ? "VERIFICATION_CODE" : "SIGN_IN",
        fields:
          d != null
            ? [$("VERIFICATION_CODE", d, !0)]
            : [
                $("USERNAME", (n = l("username_label")) != null ? n : "", !1),
                $("PASSWORD", (r = l("password_label")) != null ? r : "", !0),
              ],
        host: u.hostname,
        page_url: s,
        request_id: t,
        status: "PENDING",
        subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        title: a,
      };
    }
    function _(t) {
      var n,
        r,
        a,
        i,
        l =
          (n = c(o("WAWebHatchJsonReaders").readString(t, "display_name"))) !=
          null
            ? n
            : c(o("WAWebHatchJsonReaders").readString(t, "name"));
      if (l == null) return null;
      var s =
          (r = c(o("WAWebHatchJsonReaders").readString(t, "space_slug"))) !=
          null
            ? r
            : c(o("WAWebHatchJsonReaders").readString(t, "slug")),
        u = e.has(
          (a =
            (i = c(
              o("WAWebHatchJsonReaders").readString(t, "construction_status"),
            )) == null
              ? void 0
              : i.toLowerCase()) != null
            ? a
            : "",
        );
      return {
        __typename: "GenAISpaceCardPrimitive",
        artifact_ref: s != null ? s : l,
        can_open: s != null && !u,
        display_name: l,
        slug: s,
        source: "LOCAL",
        status: u ? "CONSTRUCTING" : "READY",
      };
    }
    function f(e) {
      var t,
        n,
        r,
        a = o("WAWebHatchBrowserTask").decodeHatchBrowserTask(e),
        i = c(a == null ? void 0 : a.browserTaskID);
      if (a == null || i == null) return null;
      var l = o("WAWebHatchJsonReaders").readObject(e, "current_site"),
        s = c(a.displayStatus),
        u = c(a.status);
      return {
        __typename: "GenAIBrowserTaskPrimitive",
        activity_title: c(a.activityTitle),
        browser_task_id: i,
        current_site:
          l != null
            ? {
                __typename: "GenAIBrowserTaskSite",
                domain: c(a.siteDomain),
                page_title: c(a.pageTitle),
                url: o("WAWebHatchUrl").toWebUrl(
                  o("WAWebHatchJsonReaders").readString(l, "url"),
                ),
              }
            : null,
        preview_available: a.previewAvailable === !0,
        state: T(u, s),
        status: u != null ? u : "",
        status_label: s,
        title:
          (t =
            (n = c(a.title)) != null
              ? n
              : c(
                  o("WAWebHatchJsonReaders").readString(
                    o("WAWebHatchJsonReaders").readObject(e, "latest_tab"),
                    "title",
                  ),
                )) != null
            ? t
            : c(a.pageTitle),
        version: (r = a.version) != null ? r : 0,
      };
    }
    function g(e, t) {
      return o("WAWebHatchJsonReaders")
        .readObjects(e, "products")
        .flatMap(function (e) {
          var n,
            r,
            a,
            i,
            l =
              (n = c(o("WAWebHatchJsonReaders").readString(e, "name"))) != null
                ? n
                : c(o("WAWebHatchJsonReaders").readString(e, "product_name")),
            s = o("WAWebHatchUrl").toWebUrl(
              o("WAWebHatchJsonReaders").readString(e, "url"),
            );
          return l == null || s == null
            ? []
            : [
                {
                  brand:
                    (r =
                      (a = c(
                        o("WAWebHatchJsonReaders").readString(
                          e,
                          "retailer_name",
                        ),
                      )) != null
                        ? a
                        : c(
                            o("WAWebHatchJsonReaders").readString(
                              e,
                              "merchant",
                            ),
                          )) != null
                      ? r
                      : y(s),
                  imageUrl: h(
                    o("WAWebHatchJsonReaders").readString(e, "image_url"),
                    t,
                  ),
                  price:
                    (i = c(
                      o("WAWebHatchJsonReaders").readString(e, "sale_price"),
                    )) != null
                      ? i
                      : c(o("WAWebHatchJsonReaders").readString(e, "price")),
                  productUrl: s,
                  title: l,
                },
              ];
        });
    }
    function h(e, t) {
      return e != null &&
        o("WAWebHatchJarvisMedia").isHatchJarvisMediaUrl(e) &&
        t.has(e)
        ? e
        : null;
    }
    function y(e) {
      return new URL(e).hostname.replace(/^www\./, "");
    }
    function C(e, t) {
      var n,
        r = o("WAWebHatchUrl").toWebUrl(
          o("WAWebHatchJsonReaders").readString(e, "url"),
        );
      return r == null
        ? null
        : {
            description: c(
              o("WAWebHatchJsonReaders").readString(e, "description"),
            ),
            imageUrl: E(o("WAWebHatchJsonReaders").readString(e, "image_url")),
            siteName: c(o("WAWebHatchJsonReaders").readString(e, "site_name")),
            title:
              (n = c(o("WAWebHatchJsonReaders").readString(e, "title"))) != null
                ? n
                : x(t, r),
            url: r,
          };
    }
    function b(e) {
      var t,
        n,
        r = (n = o("WAWebHatchJsonReaders")).readString(e, "invitation_url"),
        a = c(n.readString(e, "button_label")),
        i = c(n.readString(e, "title")),
        l = c(n.readString(e, "body"));
      if (
        o("WAWebHatchJsonReaders").readNumber(e, "version") !== s ||
        o("WAWebHatchJsonReaders").readString(e, "action") !== u ||
        r == null ||
        !o("WAWebHatchPeerInviteUrl").isHatchPeerInviteUrl(r) ||
        a == null ||
        (i == null && l == null)
      )
        return null;
      var d =
        (t = c(o("WAWebHatchJsonReaders").readString(e, "share_text"))) != null
          ? t
          : r;
      return v(r, d)
        ? { body: l, buttonLabel: a, shareText: d, title: i }
        : null;
    }
    function v(e, t) {
      var n = o("WALinkify").findLinks(t);
      return n.length === 1 && n[0].url === e;
    }
    function S(e) {
      var t = o("WAWebHatchJsonReaders")
        .readObjects(e, "items")
        .map(L)
        .filter(Boolean);
      return t.length === 0
        ? null
        : {
            rows: t,
            subtitle: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
            title: c(o("WAWebHatchJsonReaders").readString(e, "title")),
          };
    }
    function R(e) {
      return e.flatMap(function (e) {
        var t = c(o("WAWebHatchJsonReaders").readString(e, "label"));
        return t != null
          ? [
              {
                isDisabled:
                  o("WAWebHatchJsonReaders").readBool(e, "disabled") === !0,
                label: t,
                url: o("WAWebHatchUrl").toWebUrl(
                  o("WAWebHatchJsonReaders").readString(e, "url"),
                ),
              },
            ]
          : [];
      });
    }
    function L(e) {
      var t = c(o("WAWebHatchJsonReaders").readString(e, "title"));
      if (t == null) return null;
      var n = o("WAWebHatchJsonReaders").readString(e, "type"),
        r = o("WAWebHatchJsonReaders").readObject(e, "data");
      return {
        body: c(o("WAWebHatchJsonReaders").readString(e, "subtitle")),
        flight:
          n === "flight"
            ? k(o("WAWebHatchJsonReaders").readObject(r, "flight_data"))
            : null,
        imageUrl: E(o("WAWebHatchJsonReaders").readString(e, "image_url")),
        linkUrl:
          n === "link"
            ? o("WAWebHatchUrl").toWebUrl(
                o("WAWebHatchJsonReaders").readString(r, "url"),
              )
            : null,
        metaText: c(o("WAWebHatchJsonReaders").readString(e, "tertiary_title")),
        title: t,
      };
    }
    function E(e) {
      return e != null && o("WAWebHatchJarvisMedia").isHatchJarvisMediaUrl(e)
        ? e
        : o("WAWebHatchUrl").toWebUrl(e);
    }
    function k(e) {
      if (e == null) return null;
      var t = o("WAWebHatchJsonReaders").readObject(e, "bags");
      return {
        airline: c(o("WAWebHatchJsonReaders").readString(e, "airline")),
        bookingMessage: c(
          o("WAWebHatchJsonReaders").readString(e, "response_message"),
        ),
        bookingTitle: c(o("WAWebHatchJsonReaders").readString(e, "cta_text")),
        carryOnBags: o("WAWebHatchJsonReaders").readNumber(t, "carry_on"),
        checkedBags: o("WAWebHatchJsonReaders").readNumber(t, "checked"),
        detailsUrl: o("WAWebHatchUrl").toWebUrl(
          o("WAWebHatchJsonReaders").readString(e, "flight_link"),
        ),
        isChangeable: I(o("WAWebHatchJsonReaders").readString(e, "changeable")),
        isRefundable: I(o("WAWebHatchJsonReaders").readString(e, "refundable")),
        legs: o("WAWebHatchJsonReaders")
          .readObjects(e, "slices")
          .map(function (e) {
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
              stops: t.readNumber(e, "stops"),
              to: c(t.readString(e, "to")),
            };
          }),
        price: c(o("WAWebHatchJsonReaders").readString(e, "price")),
      };
    }
    function I(e) {
      return e === "yes" ? !0 : e === "no" ? !1 : null;
    }
    function T(e, t) {
      var n = D(t);
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
          })(D(e));
    }
    function D(e) {
      return (e != null ? e : "").toLowerCase().replace(/[- ]/g, "_");
    }
    function x(e, t) {
      var n = e.trim(),
        r = "](" + t + ")";
      if (!n.startsWith("[") || !n.endsWith(r)) return null;
      var o = n.slice(1, -r.length).trim();
      return o === "" || o === t || o.includes("](") ? null : o;
    }
    function $(e, t, n) {
      return {
        __typename: "GenAISecureCredentialField",
        is_secret: n,
        label: t,
        name: e,
      };
    }
    ((l.text = c),
      (l.connectorCard = d),
      (l.connectorCardForRow = m),
      (l.secureCredential = p),
      (l.spaceCard = _),
      (l.browserTask = f),
      (l.productCards = g),
      (l.siteName = y),
      (l.linkCard = C),
      (l.pairingLauncher = b),
      (l.list = S),
      (l.actionButtons = R));
  },
  98,
);
