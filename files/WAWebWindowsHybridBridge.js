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
    "WAWebWindowsHybridBridgeNativeAppState",
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
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures",
          ).WindowsHybridBridgePictures)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures",
            ).WindowsHybridBridgeDebugFeatures)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o("WAWebWindowsHybridBridgeVoip").VoipWinRTBridge)(
            d,
            m,
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
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles",
          ).WAWebWindowsHybridBridgeMediaFiles)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet",
          ).WAWebWindowsHybridBridgeSharesheet)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge",
          ).WindowsHybridAppActivationBridge)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState",
          ).WindowsHybridBridgeNativeAppState)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations",
          ).WindowsHybridBridgeSystemIntegrations)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions",
          ).WindowsHybridBridgeBrowserExtensions)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration",
          ).WindowsHybridBridgeSeamlessMigration)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder",
          ).WindowsHybridBridgeMediaTranscoder)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv",
          ).WindowsHybridBridgeAdv)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone",
          ).WindowsHybridBridgeRingtone)(E)),
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
