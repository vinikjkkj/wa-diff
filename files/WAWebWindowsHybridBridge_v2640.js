__d(
  "WAWebWindowsHybridBridge.v2640",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2640",
    "WAWebWindowsHybridBridgeAbProps.v2640",
    "WAWebWindowsHybridBridgeAdv.v2640",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2640",
    "WAWebWindowsHybridBridgeConnection.v2640",
    "WAWebWindowsHybridBridgeContacts.v2640",
    "WAWebWindowsHybridBridgeDebugFeatures.v2640",
    "WAWebWindowsHybridBridgeLinksPreview.v2640",
    "WAWebWindowsHybridBridgeMediaFiles.v2640",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2640",
    "WAWebWindowsHybridBridgeMetaConfig.v2640",
    "WAWebWindowsHybridBridgeNativeAppState.v2640",
    "WAWebWindowsHybridBridgeOds.v2640",
    "WAWebWindowsHybridBridgePictures.v2640",
    "WAWebWindowsHybridBridgePreferences.v2640",
    "WAWebWindowsHybridBridgeRateTheApp.v2640",
    "WAWebWindowsHybridBridgeRingtone.v2640",
    "WAWebWindowsHybridBridgeScalingControl.v2640",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2640",
    "WAWebWindowsHybridBridgeSharesheet.v2640",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2640",
    "WAWebWindowsHybridBridgeTouchpadFix.v2640",
    "WAWebWindowsHybridBridgeVoip.v2640",
    "WAWebWindowsHybridBridgeWam.v2640",
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
            "WAWebWindowsHybridBridgeAbProps.v2640",
          ).WindowsHybridBridgeAbProps_v2640)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2640",
          ).WindowsHybridBridgeWam_v2640)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2640",
          ).WindowsHybridBridgePreferences_v2640)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2640",
          ).WindowsHybridBridgeScalingControl_v2640)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2640",
          ).WindowsHybridBridgeOds_v2640)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2640",
          ).WindowsHybridBridgePictures_v2640)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2640",
            ).WindowsHybridBridgeDebugFeatures_v2640)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2640",
          ).VoipWinRTBridge_v2640)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2640",
          ).WAWebWindowsHybridBridgeRateTheApp_v2640)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2640",
          ).WindowsHybridBridgeConnection_v2640)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2640",
          ).WindowsHybridBridgeTouchpadFix_v2640)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2640",
          ).WindowsHybridBridgeLinksPreview_v2640)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2640",
            ).WindowsHybridBridgeContacts_v2640)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2640",
            ).WindowsHybridBridgeContacts_v2640)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2640",
          ).WAWebWindowsHybridBridgeMediaFiles_v2640)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2640",
          ).WAWebWindowsHybridBridgeSharesheet_v2640)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2640",
          ).WindowsHybridAppActivationBridge_v2640)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2640",
          ).WindowsHybridBridgeNativeAppState_v2640)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2640",
          ).WindowsHybridBridgeSystemIntegrations_v2640)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2640",
          ).WindowsHybridBridgeBrowserExtensions_v2640)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2640",
          ).WindowsHybridBridgeSeamlessMigration_v2640)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2640",
          ).WindowsHybridBridgeMediaTranscoder_v2640)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2640",
          ).WindowsHybridBridgeAdv_v2640)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2640",
          ).WindowsHybridBridgeRingtone_v2640)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2640",
          ).WindowsHybridBridgeMetaConfig_v2640)(I)),
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
    l.WindowsHybridBridge_v2640 = e;
  },
  98,
);
