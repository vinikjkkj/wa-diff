__d(
  "WAWebWindowsHybridBridge.v2627",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2627",
    "WAWebWindowsHybridBridgeAbProps.v2627",
    "WAWebWindowsHybridBridgeAdv.v2627",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2627",
    "WAWebWindowsHybridBridgeConnection.v2627",
    "WAWebWindowsHybridBridgeContacts.v2627",
    "WAWebWindowsHybridBridgeDebugFeatures.v2627",
    "WAWebWindowsHybridBridgeLinksPreview.v2627",
    "WAWebWindowsHybridBridgeMediaFiles.v2627",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2627",
    "WAWebWindowsHybridBridgeMetaConfig.v2627",
    "WAWebWindowsHybridBridgeNativeAppState.v2627",
    "WAWebWindowsHybridBridgeOds.v2627",
    "WAWebWindowsHybridBridgePictures.v2627",
    "WAWebWindowsHybridBridgePreferences.v2627",
    "WAWebWindowsHybridBridgeRateTheApp.v2627",
    "WAWebWindowsHybridBridgeRingtone.v2627",
    "WAWebWindowsHybridBridgeScalingControl.v2627",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2627",
    "WAWebWindowsHybridBridgeSharesheet.v2627",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2627",
    "WAWebWindowsHybridBridgeTouchpadFix.v2627",
    "WAWebWindowsHybridBridgeVoip.v2627",
    "WAWebWindowsHybridBridgeWam.v2627",
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
            "WAWebWindowsHybridBridgeAbProps.v2627",
          ).WindowsHybridBridgeAbProps_v2627)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2627",
          ).WindowsHybridBridgeWam_v2627)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2627",
          ).WindowsHybridBridgePreferences_v2627)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2627",
          ).WindowsHybridBridgeScalingControl_v2627)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2627",
          ).WindowsHybridBridgeOds_v2627)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2627",
          ).WindowsHybridBridgePictures_v2627)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2627",
            ).WindowsHybridBridgeDebugFeatures_v2627)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2627",
          ).VoipWinRTBridge_v2627)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2627",
          ).WAWebWindowsHybridBridgeRateTheApp_v2627)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2627",
          ).WindowsHybridBridgeConnection_v2627)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2627",
          ).WindowsHybridBridgeTouchpadFix_v2627)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2627",
          ).WindowsHybridBridgeLinksPreview_v2627)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2627",
            ).WindowsHybridBridgeContacts_v2627)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2627",
            ).WindowsHybridBridgeContacts_v2627)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2627",
          ).WAWebWindowsHybridBridgeMediaFiles_v2627)(h));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2627",
          ).WAWebWindowsHybridBridgeSharesheet_v2627)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2627",
          ).WindowsHybridAppActivationBridge_v2627)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2627",
          ).WindowsHybridBridgeNativeAppState_v2627)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2627",
          ).WindowsHybridBridgeSystemIntegrations_v2627)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2627",
          ).WindowsHybridBridgeBrowserExtensions_v2627)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2627",
          ).WindowsHybridBridgeSeamlessMigration_v2627)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2627",
          ).WindowsHybridBridgeMediaTranscoder_v2627)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2627",
          ).WindowsHybridBridgeAdv_v2627)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2627",
          ).WindowsHybridBridgeRingtone_v2627)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2627",
          ).WindowsHybridBridgeMetaConfig_v2627)(I)),
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
    l.WindowsHybridBridge_v2627 = e;
  },
  98,
);
