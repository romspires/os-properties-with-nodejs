const os = require('os')

setInterval(()=>{
    const {arch, freemem, totalmem, platform, version, cpus} = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;
    const ver = version;
    const procs = cpus();

    const stats = {
        OS: platform(),
        Version: ver(),
        Arch: arch(),
        CPUs: procs,
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    };
    
    console.clear();
    //console.table(stats);
    exports.stats = stats;

},1000)