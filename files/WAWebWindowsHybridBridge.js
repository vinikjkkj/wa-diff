__d(
  "WAWebWindowsHybridBridge",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge",
    "WAWebWindowsHybridBridgeAbProps",
    "WAWebWindowsHybridBridgeAdv",
    "WAWebWindowsHybridBridgeBrowserExtensions",
    "WAWebWindowsHybridBridgeConnection",
    "WAWebWindowsHybridBridgeContacts",
    "WAWebWindowsHybridBridgeDebugFeatures",
    "WAWebWindowsHybridBridgeLinksPreview",
    "WAWebWindowsHybridBridgeMediaFiles",
    "WAWebWindowsHybridBridgeMediaTranscoder",
    "WAWebWindowsHybridBridgeMetaConfig",
    "WAWebWindowsHybridBridgeNativeAppState",
    "WAWebWindowsHybridBridgeOds",
    "WAWebWindowsHybridBridgePictures",
    "WAWebWindowsHybridBridgePreferences",
    "WAWebWindowsHybridBridgeRateTheApp",
    "WAWebWindowsHybridBridgeRingtone",
    "WAWebWindowsHybridBridgeScalingControl",
    "WAWebWindowsHybridBridgeSeamlessMigration",
    "WAWebWindowsHybridBridgeSharesheet",
    "WAWebWindowsHybridBridgeSystemIntegrations",
    "WAWebWindowsHybridBridgeTouchpadFix",
    "WAWebWindowsHybridBridgeVoip",
    "WAWebWindowsHybridBridgeWam",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps",
          ).WindowsHybridBridgeAbProps)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam",
          ).WindowsHybridBridgeWam)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences",
          ).WindowsHybridBridgePreferences)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl",
          ).WindowsHybridBridgeScalingControl)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds",
          ).WindowsHybridBridgeOds)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures",
          ).WindowsHybridBridgePictures)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures",
            ).WindowsHybridBridgeDebugFeatures)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o("WAWebWindowsHybridBridgeVoip").VoipWinRTBridge)(
            m,
            p,
          )),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp",
          ).WAWebWindowsHybridBridgeRateTheApp)(e.hostObjects.RateAppBridge)),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection",
          ).WindowsHybridBridgeConnection)(e.hostObjects.ConnectionBridge)),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix",
          ).WindowsHybridBridgeTouchpadFix)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview",
          ).WindowsHybridBridgeLinksPreview)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles",
          ).WAWebWindowsHybridBridgeMediaFiles)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet",
          ).WAWebWindowsHybridBridgeSharesheet)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge",
          ).WindowsHybridAppActivationBridge)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState",
          ).WindowsHybridBridgeNativeAppState)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations",
          ).WindowsHybridBridgeSystemIntegrations)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions",
          ).WindowsHybridBridgeBrowserExtensions)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration",
          ).WindowsHybridBridgeSeamlessMigration)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder",
          ).WindowsHybridBridgeMediaTranscoder)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv",
          ).WindowsHybridBridgeAdv)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone",
          ).WindowsHybridBridgeRingtone)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig",
          ).WindowsHybridBridgeMetaConfig)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge = e;
  },
  98,
);
