__d(
  "WAWebWindowsHybridBridge",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge",
    "WAWebWindowsHybridBridgeAbProps",
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
    "WAWebWindowsHybridBridgeSharesheet",
    "WAWebWindowsHybridBridgeSystemIntegrations",
    "WAWebWindowsHybridBridgeTouchpadFix",
    "WAWebWindowsHybridBridgeVoip",
    "WAWebWindowsHybridBridgeWam",
    "WAWebWindowsStartupWebTimings",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          r;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var a = e.hostObjects.AbPropsBridge;
        a != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps",
          ).WindowsHybridBridgeAbProps)(a));
        var i = e.hostObjects.WamBridge;
        i != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam",
          ).WindowsHybridBridgeWam)(i));
        var l = e.hostObjects.PreferencesBridge;
        l &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences",
          ).WindowsHybridBridgePreferences)(l));
        var s = e.hostObjects.ScalingControlBridge;
        s &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl",
          ).WindowsHybridBridgeScalingControl)(s));
        var u = e.hostObjects.OdsBridge;
        u != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds",
          ).WindowsHybridBridgeOds)(u)),
          this.ods.initialize());
        var c = e.hostObjects.PicturesBridge;
        c &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures",
          ).WindowsHybridBridgePictures)(c));
        var d = e.hostObjects.DebugFeaturesBridge,
          m = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        d != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures",
            ).WindowsHybridBridgeDebugFeatures)(d))
          : m != null;
        var p = e.hostObjects.VoipBridge,
          _ = e.hostObjects.VoipSignalingBridge;
        (p &&
          _ &&
          (this.voip = new (o("WAWebWindowsHybridBridgeVoip").VoipWinRTBridge)(
            p,
            _,
          )),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp",
          ).WAWebWindowsHybridBridgeRateTheApp)(e.hostObjects.RateAppBridge)),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection",
          ).WindowsHybridBridgeConnection)(
            e.hostObjects.ConnectionBridge,
            function (e) {
              var n;
              return (n = t.abProps) == null
                ? void 0
                : n.acknowledgeExposureLoggedInUserSession(e);
            },
          )),
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
          var f = e.hostObjects.sync.PopulatedContactsBridge,
            g = e.hostObjects.PopulatedContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(g, f, !0));
        } catch (t) {
          var h = e.hostObjects.ContactsBridge;
          h != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts",
            ).WindowsHybridBridgeContacts)(
              h,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var y = e.hostObjects.MediaFilesBridge;
        y != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles",
          ).WAWebWindowsHybridBridgeMediaFiles)(y, e));
        var C = e.hostObjects.SharesheetBridge;
        C != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet",
          ).WAWebWindowsHybridBridgeSharesheet)(C));
        var b = e.hostObjects.AppActivationBridge;
        b != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge",
          ).WindowsHybridAppActivationBridge)(b));
        var v = e.hostObjects.NativeAppStateBridge,
          S = e.hostObjects.sync.NativeAppStateBridge;
        v != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState",
          ).WindowsHybridBridgeNativeAppState)(v, S));
        var R = e.hostObjects.SystemIntegrationsBridge;
        R &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations",
          ).WindowsHybridBridgeSystemIntegrations)(R));
        var L = e.hostObjects.BrowserExtensionsBridge;
        L &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions",
          ).WindowsHybridBridgeBrowserExtensions)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder",
          ).WindowsHybridBridgeMediaTranscoder)(e, E));
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
          (r = e.hostObjects.WebUpdateBridge) == null ||
            r.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY),
          o("WAWebWindowsStartupWebTimings").markWindowsBridgeReady());
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
