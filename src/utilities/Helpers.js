export async function f() {

  try {
	  let promise = new Promise((resolve, reject) => {
	    setTimeout(() => resolve("done!"), 1000)
	  });

  	let result = await promise; // wait till the promise resolves (*
  	return result;

  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

/*
export function g() {
  return  Promise.resolve(1);
}

*/