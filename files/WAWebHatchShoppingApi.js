__d(
  "WAWebHatchShoppingApi",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchShoppingData",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebPrimaryFeaturesModel",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new WeakMap(),
      d = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    async function m(t, n, a) {
      a === void 0 && (a = t.productId);
      var i = S(t);
      if (i == null || !o("WAWebHatchShoppingData").isShoppingId(a) || !R(n))
        return { kind: "Unavailable" };
      if (!L(n)) return { kind: "Stale" };
      try {
        var l,
          s,
          u = await o("WAWebHatchVmConnection").connectHatchVmApi();
        if (!L(n) || !R(n)) return { kind: "Stale" };
        if (u == null) return { kind: "Unavailable" };
        var c = await u.request(
          "GET",
          o("WAWebHatchVmTransport").JarvisPaths.SHOPPING(
            a,
            i,
            (l = (s = t.connector) == null ? void 0 : s.id) != null ? l : null,
          ),
          { timeoutMs: 6e4 },
        );
        if (!L(n) || !R(n)) return { kind: "Stale" };
        if (c.kind !== "Ok") return { kind: "Failed", call: c };
        var d = o("WAWebHatchJsonReaders").readField(c.value, "type"),
          m =
            d == null || d === i
              ? o("WAWebHatchShoppingData").decodeShoppingDetails(
                  o("WAWebHatchJsonReaders").readObject(c.value, "data"),
                  t,
                  a,
                )
              : null;
        return m == null ? { kind: "Unavailable" } : { kind: "Ok", details: m };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-shopping: detail read failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-shopping-detail-read-failed"),
          { kind: "Unavailable" }
        );
      }
    }
    function p(e) {
      return h(e) != null;
    }
    async function _(e, t) {
      var n,
        r,
        o = h(e),
        a = t.sourceKey;
      if (o == null || a == null || !R(t)) return { kind: "Unavailable" };
      if (!L(t)) return { kind: "Stale" };
      var i = JSON.stringify([
          t.accountKey,
          t.vmKey,
          t.sessionId,
          t.accountGeneration,
          (n = e.seed.connector) == null ? void 0 : n.id,
          o,
        ]),
        l = (r = c.get(a)) != null ? r : new Map(),
        s = l.get(i);
      if (s != null)
        return s.kind === "Accepted"
          ? babelHelpers.extends({}, s, { visible: E(t) })
          : s;
      (l.set(i, { kind: "Pending" }), c.set(a, l));
      var u = await f(o, t);
      e: {
        if (u.kind === "Accepted") {
          l.set(i, u);
          break e;
        }
        if (u.kind === "Uncertain") {
          l.set(i, { kind: "Uncertain" });
          break e;
        }
        {
          l.delete(i);
          break e;
        }
      }
      return u;
    }
    async function f(e, t) {
      var n = !1;
      try {
        var a = await o("WAWebHatchVmConnection").connectHatchVmApi();
        if (!L(t) || !R(t)) return { kind: "Stale" };
        if (a == null) return { kind: "Unavailable" };
        var i = new TextEncoder().encode(
          JSON.stringify(
            babelHelpers.extends(
              {},
              e,
              t.sessionId == null ? {} : { session_id: t.sessionId },
            ),
          ),
        );
        n = !0;
        var l = await a.request(
          "POST",
          o("WAWebHatchVmTransport").JarvisPaths.SHOPPING_EVENTS,
          { body: i, timeoutMs: 12e4 },
        );
        return g(l, e, t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-shopping: intent handoff failed sent=",
                  "",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-shopping-intent-handoff-failed"),
          n ? { kind: "Uncertain" } : { kind: "Unavailable" }
        );
      }
    }
    function g(e, t, n) {
      if (e.kind === "Rejected") {
        var r = e.statusCode;
        if (r != null && r < 500 && r !== 408 && r !== 429)
          return { kind: "Rejected", call: e };
      }
      if (e.kind === "Failure" && e.reason === "NO_CHANNEL")
        return { kind: "Unavailable" };
      var o = e.kind === "Ok" ? k(e.value, t, n.sessionId) : null;
      return o == null
        ? { kind: "Uncertain", call: e }
        : { kind: "Accepted", ack: o, visible: E(n) };
    }
    function h(e) {
      var t = e.details,
        n = e.seed;
      return n.unavailable || (e.widgetId != null && !v(e.widgetId))
        ? null
        : n.provider != null
          ? C(e)
          : e.type !== "buy" || n.primaryAction != null
            ? null
            : n.productType === "browser"
              ? n.product.productUrl != null && t == null
                ? {
                    type: "clicked_purchase",
                    product_url: n.product.productUrl,
                  }
                : null
              : y(e);
    }
    function y(e) {
      var t,
        n = e.details,
        r = e.seed;
      if (r.productType !== "catalog" || n == null || n.seed !== r) return null;
      var a = o("WAWebHatchShoppingData").resolveShoppingVariant(
          n,
          e.selections,
        ),
        i = (t = n.checkoutCreation) != null ? t : r.checkoutCreation;
      return a == null ||
        !v(a.id) ||
        !i ||
        (n.checkoutCreation != null && a.id !== n.id)
        ? null
        : { type: "clicked_purchase", product_id: a.id };
    }
    function C(e) {
      var t = e.details,
        n = e.seed,
        r = n.connector,
        a = n.productId;
      if (
        (r == null ? void 0 : r.productDetails) !== !0 ||
        t == null ||
        t.seed !== n ||
        !v(a) ||
        !v(r.id) ||
        n.productType !== "browser" ||
        (n.primaryAction !== "add_to_cart" &&
          (e.widgetId != null || n.primaryAction != null))
      )
        return null;
      var i = e.type === "add" ? "add_to_cart" : "buy_now",
        l = o("WAWebHatchShoppingData").resolveShoppingVariant(t, e.selections);
      return l == null || !v(l.id) || !t.actions.includes(i)
        ? null
        : b(e, a, l.id, t.id, r);
    }
    function b(e, t, n, r, o) {
      var a = e.type === "add" ? "clicked_add_to_cart" : "clicked_purchase",
        i =
          e.type === "add" && e.widgetId != null
            ? { widget_id: e.widgetId }
            : { connector: o.id };
      return n === t
        ? babelHelpers.extends({ type: a, product_id: t }, i)
        : o.addToCartVariants
          ? babelHelpers.extends(
              { type: a, product_id: t, variant_product_id: n },
              i,
            )
          : e.type === "buy" && n === r
            ? { type: a, product_id: n, connector: o.id }
            : null;
    }
    function v(e) {
      return (
        o("WAWebHatchShoppingData").isShoppingId(e, 160) &&
        new TextEncoder().encode(e).length <= 160
      );
    }
    function S(e) {
      if (e.unavailable) return null;
      if (e.provider != null) {
        var t;
        return ((t = e.connector) == null ? void 0 : t.productDetails) === !0
          ? "product_details"
          : null;
      }
      return e.productType === "catalog"
        ? "product_details"
        : e.productType === "marketplace"
          ? "listing_details"
          : null;
    }
    function R(e) {
      return [
        e.sessionId == null || d.test(e.sessionId),
        e.accountKey !== "",
        e.vmKey !== "",
        o("WAWebHatchFrontendGating").isHatchIntegrationEnabled(),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_shopping_enabled",
        ),
        o("WAWebABProps").getABPropConfigValue("ai_hatch_shopping_enabled"),
        e.isAccountCurrent(),
      ].every(Boolean);
    }
    function L(e) {
      var t;
      return (
        ((t = e.signal) == null ? void 0 : t.aborted) !== !0 &&
        e.isViewCurrent()
      );
    }
    function E(e) {
      try {
        return L(e) && R(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-shopping: accepted visibility check failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-shopping-accepted-visibility-failed"),
          !1
        );
      }
    }
    function k(e, t, n) {
      var r,
        a = (r = o("WAWebHatchJsonReaders")).readString(e, "session_id"),
        i = r.readString(e, "type"),
        l = r.readString(e, "stream_owner_message_id"),
        s = r.readString(e, "channel"),
        u = r.readBool(e, "is_thread"),
        c = r.readString(e, "product_id");
      return i == null ||
        i !== t.type ||
        !o("WAWebHatchShoppingData").isShoppingId(l) ||
        s !== "main" ||
        a == null ||
        u == null ||
        !I(a, u, n) ||
        (t.product_id != null && c !== t.product_id)
        ? null
        : {
            type: i,
            streamOwnerMessageId: l,
            channel: s,
            sessionId: a,
            isThread: u,
            productId: c,
          };
    }
    function I(e, t, n) {
      return d.test(e) && (n == null ? !t : t && e === n);
    }
    ((l.readProductDetails = m),
      (l.getShoppingIntentAvailable = p),
      (l.dispatchShoppingIntent = _));
  },
  98,
);
