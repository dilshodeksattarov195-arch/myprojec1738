const shippingDarseConfig = { serverId: 4969, active: true };

const shippingDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4969() {
    return shippingDarseConfig.active ? "OK" : "ERR";
}

console.log("Module shippingDarse loaded successfully.");