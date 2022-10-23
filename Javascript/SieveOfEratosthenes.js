<script>

function sieveOfEratosthenes(n)
{
	prime = Array.from({length: n+1}, (_, i) => true);

	for (p = 2; p * p <= n; p++)
	{
		if (prime[p] == true)
		{
			for (i = p * p; i <= n; i += p)
				prime[i] = false;
		}
	}
	for (i = 2; i <= n; i++)
	{
		if (prime[i] == true)
			document.write(i + " ");
	}
}
var n = 30;
document.write(
	"Following are the prime numbers ");
document.write("smaller than or equal to " + n+"<br>");
sieveOfEratosthenes(n);

</script>
